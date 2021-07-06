import * as Sentry from '@sentry/browser';
import { Auth } from 'aws-amplify';
import React from 'react';

import { AuthStateData } from './AuthStateData';
import { UserActions, UserContext } from './UserContext';

interface Props {
  navigation?: any;
  route?: any;
}

interface State {
  pass: string;
  user: string;
  authError: string;
  fromVerified: boolean;
}

export default class SignIn extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(props.route);
    this.state = {
      pass: '',
      user: props.route?.params?.email ?? '',
      authError: '',
      fromVerified: props.route?.params?.fromVerified ?? false,
    };
  }
  static UserConsumer = UserContext.Consumer;
  UNSAFE_componentWillMount(): void {
    console.log(this.props.route);
    this.setState({
      user: this.props.route?.params?.email ?? '',
      fromVerified: this.props.route?.params?.fromVerified ?? false,
    });
  }
  componentDidUpdate(prevProps: Props): void {
    //        console.log({ CompUpdate: this.props.route })
    if (this.props.route?.params?.email !== prevProps.route?.params?.email) {
      //            console.log("UPDATE1")
      this.setState({ user: this.props.route?.params?.email });
    }
    if (
      this.props.route?.params?.fromVerified !==
      prevProps.route?.params?.fromVerified
    ) {
      //            console.log("UPDATE2")
      this.setState({ fromVerified: this.props.route?.params?.fromVerified });
    }
  }

  async changeAuthState(
    action: UserActions,
    state: string,
    user?: any,
    data?: AuthStateData | null
  ): Promise<void> {
    this.setState({
      pass: '',
      user: '',
      authError: '',
    });
    if (action.onStateChange) await action.onStateChange(state, data ?? null);
    if (user) action.onSetUser(user);
  }

  validateLogin(): boolean {
    if (!/^\S*$/.test(this.state.user)) {
      this.setState({ authError: 'Email cannot contain spaces' });
      return false;
    }
    if (!this.state.user) {
      this.setState({ authError: 'Email cannot be empty' });
      return false;
    }
    if (!this.state.pass) {
      this.setState({ authError: 'Password cannot be empty' });
      return false;
    }
    return true;
  }
  async handleSignIn(actions: any): Promise<void> {
    if (this.validateLogin()) {
      try {
        Sentry.setUser({ email: this.state.user?.toLowerCase() });
        Sentry.setTag('User Email', this.state.user?.toLowerCase());
        await Auth.signIn(this.state.user.toLowerCase(), this.state.pass).then(
          async (user) => {
            if (user.challengeName == 'NEW_PASSWORD_REQUIRED') {
              await this.changeAuthState(actions, 'requireNewPassword', user);
            } else {
              await this.changeAuthState(actions, 'signedIn');
            }
          }
        );
      } catch (err) {
        this.setState({ authError: err.message });
        Sentry.configureScope((scope: any) => {
          scope.setUser(null);
        });
      }
    }
  }

  /*handleEnter(
    actions: any,
    keyEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
  ): void {
    if (keyEvent.nativeEvent.key === 'Enter') this.handleSignIn(actions);
  }
*/
  render(): React.ReactNode {
    return (
      <SignIn.UserConsumer>
        {({ userState, userActions }) => {
          console.log(userState);
          if (!userState) return null;
          return (
            <>
              {userState.authState === 'signIn' ||
              userState.authState === 'signedOut' ||
              userState.authState === 'signedUp' ? (
                <div>
                  <div>
                    <button
                      //accessibilityLabel="Create account"
                      //accessibilityHint="Navigate to account creation page"
                      onClick={async () => {
                        await this.changeAuthState(
                          userActions,
                          'signUp',
                          null,
                          null
                        );
                      }}
                    >
                      Create an Account
                    </button>
                  </div>
                  <div>
                    <h1
                    //accessibilityRole="header"
                    >
                      Welcome to The Meeting House
                    </h1>

                    <input
                      //  autoCompleteType="email"
                      //textContentType="emailAddress"
                      type="email"
                      autoFocus
                      //keyboardType="email-address"
                      placeholder="Email"
                      value={this.state.user}
                      onChange={(e: any) =>
                        this.setState({ user: e.target.value })
                      }

                      //secureTextEntry={false}
                    ></input>
                    <input
                      // autoCompleteType="password"
                      // textContentType="password"
                      // onKeyPress={(e: any) => {
                      //   this.handleEnter(userActions, e);
                      // }}
                      type="password"
                      placeholder="Password"
                      value={this.state.pass}
                      onChange={(e: any) =>
                        this.setState({ pass: e.target.value })
                      }
                    ></input>
                    <button
                      //  accessibilityLabel="Login"
                      //  accessibilityHint="Navigate to platform"
                      onClick={async () => {
                        await this.handleSignIn(userActions);
                      }}
                    >
                      Sign In
                    </button>
                    <button
                      // accessibilityLabel="Forgot password"
                      // accessibilityHint="Navigate to forgot password page"
                      // accessibilityRole="button"
                      onClick={async () => {
                        await this.changeAuthState(
                          userActions,
                          'forgotPassword'
                        );
                      }}
                    >
                      <div>Forgot password?</div>
                    </button>
                    <div
                    // accessibilityLiveRegion={'assertive'}
                    // accessibilityRole="alert"
                    >
                      {this.state.authError ? <img src="warning.gif" /> : null}{' '}
                      {this.state.authError}
                    </div>
                    <div
                    //   accessible={this.state.fromVerified}
                    //   accessibilityLiveRegion={'assertive'}
                    //  accessibilityRole="alert"
                    >
                      {this.state.fromVerified
                        ? 'User Verified. Please Login.'
                        : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          );
        }}
      </SignIn.UserConsumer>
    );
  }
}
