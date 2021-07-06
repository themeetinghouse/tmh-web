import Amplify, { Analytics, API, Auth, graphqlOperation } from 'aws-amplify';

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
//import * as Linking from 'expo-linking';
import moment from 'moment';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
//import * as Sentry from '@sentry/browser';
import { CreateTmhUserMutation } from 'API';
import awsconfig from '../../../src/aws-exports';
import * as mutations from '../../../src/graphql/mutations';
import * as queries from '../../../src/graphql/queries';
import {
  ProfileStatus,
  TMHCognitoUser,
  UserContext,
  //  UserState,
} from './UserContext';
import { RouteComponentProps } from 'react-router-dom';
import { GraphQLResult } from '@aws-amplify/api';
import { CreateTMHUserInput, GetTmhUserQuery } from 'API';
import Validate from './Validate';

Amplify.configure(awsconfig);

//const PERSISTENCE_KEY = "NAVIGATION_STATE"

interface State {
  hasCompletedPersonalProfile: ProfileStatus;

  userExists: boolean;
  user: any;
  authState: any;
  hasCompletedOrganizationProfile: string;
  orgId: string;
  isOrg: boolean;
  initialAuthType: string | null;
  initialParams: any;
  idempotency: string;
  groups: string[] | null;
  groupsLoaded: boolean;
}
export default class Authenticator extends React.Component<
  RouteComponentProps<any>,
  State
> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
    this.state = {
      initialParams: null,
      groups: null,
      hasCompletedPersonalProfile: ProfileStatus.Unknown,
      userExists: false,
      user: null,
      authState: 'signedOut',
      hasCompletedOrganizationProfile: 'Unknown',
      orgId: '',
      isOrg: false,
      groupsLoaded: false,
      initialAuthType: null,
      idempotency: uuidv4(),
      // initialUrl: '',
    };
  }
  onSetUser = (user: any): void => {
    this.setState({ user: user });
  };
  async componentDidMount(): Promise<void> {
    /* try {
      await this.updateGroups();
    } catch (e) {
      console.log(e);
    }*/
    console.log(this.props.location.pathname);
    if (this.props.location.pathname == '/signin') {
      this.setState({ authState: 'signIn' });
      console.log('SIGNIN');
    } else if (this.props.location.pathname == '/signup') {
      this.setState({ authState: 'signUp' });
      console.log('SIGNUP');
    } else if (this.props.location.pathname == '/verifycontact') {
      this.setState({ authState: 'verifyContact' });
      console.log('VERIFYCONTACT');
    } else if (this.props.location.pathname == '/confirmsignup') {
      this.setState({ authState: 'confirmSignUp' });
      console.log('CONFIRMSIGNUP');
    } else if (this.props.location.pathname == '/forgotpassword') {
      this.setState({ authState: 'forgotPassword' });
      console.log('FORGOTPASSWORD');
    } else if (this.props.location.pathname == '/requirenewpassword') {
      this.setState({ authState: 'requireNewPassword' });
      console.log('REQUIRENEWPASSWORD');
    }
    await this.getAuthInitialState();
    await this.performStartup();
  }
  isReady = (): boolean => {
    if (this.state.groups) return true;
    else {
      //this.updateGroups();
      return false;
    }
  };
  isMemberOf = (group: string): boolean => {
    if (this.state.groups) return this.state.groups.includes(group);
    else return false;
  };
  /*  updateGroups = async (): Promise<void> => {
    try {
      const currentUser =
        (await Auth.currentAuthenticatedUser()) as JCCognitoUser;
      const userSession = currentUser.getSignInUserSession();
      const refreshToken = userSession?.getRefreshToken();
      if (refreshToken)
        currentUser.refreshSession(refreshToken, (err: any, session: any) => {
          console.log('UPDATED GROUPS!');
          currentUser.setSignInUserSession(session);
        });
      const user = (await Auth.currentAuthenticatedUser()) as JCCognitoUser;
      this.setState({
        groups: user.getSignInUserSession()?.getAccessToken().payload[
          'cognito:groups'
        ],
        groupsLoaded: true,
      });
      console.log({
        'DONE ': user.getSignInUserSession()?.getAccessToken().payload[
          'cognito:groups'
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };*/
  async performStartup(): Promise<void> {
    this.trackUserId();
    if (this.state.authState == 'signedIn') {
      await this.recheckUserState();
    } else if (this.state.authState == 'signIn') {
      //  await this.props.onStateChange('signIn', null);
    }
  }
  private user: TMHCognitoUser | undefined | null;

  async ensureUserExists(performChecks: () => Promise<void>): Promise<void> {
    let userExists = false;
    this.user = await Auth.currentAuthenticatedUser().catch(() => {
      console.log('No current authenticated user');
    });
    if (this.user != null) {
      const { attributes } = this.user;

      const handleUser = async (getUser: GraphQLResult<GetTmhUserQuery>) => {
        console.log(getUser);
        if (getUser.data == null || getUser.data == undefined) {
          //  Sentry.captureEvent(getUser);
          console.log({ Errors: getUser.errors });
        }
        if (getUser?.data?.getTMHUser == null) {
          console.log('Trying to create');
          const inputData: CreateTMHUserInput = {
            id: this.user?.username,
            given_name: attributes?.given_name ?? '',
            family_name: attributes?.family_name ?? '',
            email: attributes?.email,
            phone: attributes?.phone_number,
            //  profileState: 'Incomplete',
            billingAddress: {},

            joined: moment().format(),
          };

          try {
            const createUser = (await API.graphql({
              query: mutations.createTmhUser,
              variables: {
                input: inputData,
              },
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as GraphQLResult<CreateTmhUserMutation>;

            userExists = true;
            console.log({ createUser: createUser });
          } catch (e) {
            console.log({ error: e });
          }
        } else {
          userExists = true;
          console.log('User exists');
        }
      };
      const z = API.graphql(
        graphqlOperation(queries.getTmhUser, { id: this.user['username'] })
      ) as Promise<GraphQLResult<GetTmhUserQuery>>;
      await z.then(handleUser).catch(handleUser);

      console.log({ userExists: userExists });
      this.setState({ userExists: userExists }, performChecks);
    }
  }

  async createStripeUser(billingAddress: any): Promise<boolean> {
    try {
      const user = (await Auth.currentAuthenticatedUser()) as TMHCognitoUser;
      console.log(user);
      /*const customer = (await API.graphql({
        query: mutations.createCustomer,
        variables: {
          idempotency: this.state.idempotency,
          firstName: user?.attributes?.given_name,
          lastName: user?.attributes?.family_name,
          email: user?.attributes?.email,
          phone: user?.attributes?.phone_number,
          billingAddress: billingAddress,
          orgName: user?.attributes!['custom:orgName'],
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<CreateCustomerMutation>;
      console.log({ customer: customer });*/
      return true;
      //customerId = customer.data.createCustomer.customer.id;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  recheckUserState = async (): Promise<void> => {
    console.debug('recheckUserState');
    await this.ensureUserExists(async (): Promise<void> => {
      //   const paidStatus = await this.checkIfPaid();
      const profileStatus = await this.checkIfCompletedProfile();
      this.setState(
        {
          //  hasPaidState: paidStatus,
          hasCompletedPersonalProfile: profileStatus,
        },
        async () => {
          await this.performNavigation();
        }
      );
    });
  };
  async performNavigation(): Promise<void> {
    console.log('NAVIGATING');
    switch (this.state.hasCompletedPersonalProfile) {
      case ProfileStatus.Completed:
        /*const initialUrl = await Linking.getInitialURL();
            console.log(initialUrl);
            if (Platform.OS == 'web' && initialUrl?.includes('auth/payment3')) {
              if (
                this.isMemberOf('friends') ||
                this.isMemberOf('partners') ||
                this.isMemberOf('admin') ||
                this.isMemberOf('legacyUserGroup1') ||
                this.isMemberOf('subscriptionPartners') ||
                this.isMemberOf('courseAdmin') ||
                this.isMemberOf('courseUser') ||
                this.isMemberOf('courseCoach')
              ) {
                RootNavigation.navigate('mainApp', {});
                break;
              } else if (
                !this.state.initialUrl.includes('app/resource') &&
                (this.isMemberOf('subscriptionkyearlyyears') ||
                  this.isMemberOf('subscriptionkykids') ||
                  this.isMemberOf('subscriptionkyyouth'))
              ) {
                RootNavigation.navigate('mainApp', {
                  screen: 'mainDrawer',
                  params: {
                    screen: 'ResourceScreen',
                    params: {
                      create: false,
                      id: constants['SETTING_KY_GROUP_ID'],
                    },
                  },
                });
                break;
              }
            }
            RootNavigation.navigate('mainApp', {});*/
        break;
      case ProfileStatus.Incomplete:
        /* RootNavigation.navigate('auth', {
              screen: 'Payment3',
            });*/
        break;
    }

    console.log('DONE PERFORM NAVIGATION');
  }
  async checkIfCompletedProfile(): Promise<ProfileStatus> {
    console.debug('checkIfCompletedProfile');
    console.debug({
      user: this.state.userExists,
    });
    if (this.state.userExists) {
      const handleUser = (getUser: GraphQLResult<GetTmhUserQuery>) => {
        const response = Validate.Profile(getUser?.data?.getTMHUser);
        console.log({ Validate: response });
        console.debug({ checkIfCompletedProfileResult: response.result });
        if (response.result) return ProfileStatus.Completed;
        else if (!response.result) return ProfileStatus.Incomplete;
        else return ProfileStatus.Unknown;
      };
      const getUser = API.graphql(
        graphqlOperation(queries.getTmhUser, { id: this.user?.username })
      ) as Promise<GraphQLResult<GetTmhUserQuery>>;
      return await getUser.then(handleUser).catch(handleUser);
    }
    return ProfileStatus.Unknown;
  }
  updateHasCompletedPersonalProfile = (): void => {
    this.checkIfCompletedProfile();
  };
  renderFallback(): React.ReactNode {
    return <div>loading...</div>;
  }
  trackUserId = async (): Promise<void> => {
    console.log('Setting up Analytics');
    try {
      const { attributes } =
        (await Auth.currentAuthenticatedUser()) as TMHCognitoUser;
      const userAttributes = mapToArrayOfStrings(attributes);
      console.log({
        Email: attributes?.email,
        Sub: attributes?.sub,
        userAttributes: userAttributes,
      });
      Analytics.updateEndpoint({
        address: attributes?.email,
        channelType: 'EMAIL',
        optOut: 'NONE',
        userId: attributes?.sub,
        userAttributes,
      });
    } catch (error) {
      console.log(error);
    }
  };
  async getAuthInitialState(): Promise<void> {
    /* const initialUrl = await Linking.getInitialURL();
    const initialParams = Linking.parse(initialUrl ?? '').queryParams;

    this.setState({ initialUrl: initialUrl ?? '' });
    console.log({ 'INITIAL URL': initialUrl });
    console.log({ initialParams: initialParams });
    if (initialUrl?.toLowerCase().includes('/auth/signup'))
      this.setState({
        initialAuthType: 'signup',
        initialParams,
      });
    else {
      this.setState({ initialAuthType: 'signin', initialParams });
    }*/
  }

  static UserProvider = UserContext.Provider;
  render(): React.ReactNode {
    console.log({
      UserState: [
        'User Info',
        { AuthState: this.state.authState },
        { 'Profile state': this.state.hasCompletedPersonalProfile },
      ],
    });

    return (
      <Authenticator.UserProvider
        value={{
          userState: {
            ...this.state,
          },
          userActions: {
            onSetUser: this.onSetUser,
            updateHasCompletedPersonalProfile: this.recheckUserState,
            updateHasCompletedOrganizationProfile: this.recheckUserState,
            recheckUserState: this.recheckUserState,
            onStateChange: async (state, data) => {
              this.setState({ authState: state }, () => {
                if (state == 'signUp') this.props.history.push('/signup');
                else if (state == 'requireNewPassword')
                  this.props.history.push('/requireNewPassword');
                else if (state == 'signIn') this.props.history.push('/signIn');
                else if (state == 'verifyContact')
                  this.props.history.push('/verifyContact');
                else if (state == 'confirmSignUp')
                  this.props.history.push('/confirmSignUp');
                else if (state == 'forgotPassword')
                  this.props.history.push('/forgotPassword');
                else if (state == 'signedIn')
                  this.props.history.push('/account');
              });
            },
            //updateGroups: this.updateGroups,
            isReady: this.isReady,
            isMemberOf: this.isMemberOf,
          },
        }}
      >
        {this.props.children}
      </Authenticator.UserProvider>
    );
  }
}
const mapObj = (f: any) => (obj: any) =>
  Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: f(obj[key]) }), {});
const toArrayOfStrings = (value: any) => [`${value}`];
const mapToArrayOfStrings = mapObj(toArrayOfStrings);
