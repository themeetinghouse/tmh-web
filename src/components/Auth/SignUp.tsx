import { Auth } from 'aws-amplify';
//import countryDialCodes from 'aws-amplify-react-native/src/CountryDialCodes';
import React from 'react';

import { AuthStateData } from './AuthStateData';
import * as Sentry from '@sentry/browser';
import { UserActions, UserContext } from './UserContext';

interface Props {
  navigation?: any;
  route?: any;
}

interface State {
  user: {
    first: string;
    last: string;
    pass: string;
    pass2: string;
    email: string;
    phone: string;
    code: string;
    orgName: string;
  };
  authError: string;
  sendingData: boolean;
}

export default class SignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: {
        first: '',
        last: '',
        pass: '',
        pass2: '',
        email: '',
        phone: '',
        code: '+1', // default to Canada
        orgName: '',
      },
      authError: '',
      sendingData: false,
    };
    console.log({ PARAMS: props.route });
  }
  static UserConsumer = UserContext.Consumer;

  async changeAuthState(
    actions: UserActions,
    state: string,
    data: AuthStateData | null
  ): Promise<void> {
    this.setState({
      user: {
        first: '',
        last: '',
        pass: '',
        pass2: '',
        email: '',
        phone: '',
        code: '+1',
        orgName: '',
      },
      authError: '',
      sendingData: false,
    });
    if (actions.onStateChange) await actions.onStateChange(state, data);
  }

  validate(): boolean {
    let val = true;
    let errorMsg = '';
    if (!this.state.user.first) {
      val = false;
      errorMsg = 'Please enter your first name';
    } else if (!this.state.user.last) {
      val = false;
      errorMsg = 'Please enter your last name';
    } else if (!this.state.user.email || !this.state.user.email.includes('@')) {
      val = false;
      errorMsg = 'Please enter a valid email';
    } else if (!this.state.user.pass) {
      val = false;
      errorMsg = 'Please enter a password';
    } else if (this.state.user.pass.length < 8) {
      errorMsg = 'Password must be at least 8 characters';
      val = false;
    } else if (!this.state.user.pass2) {
      val = false;
      errorMsg = 'Please confirm your password';
    } else if (this.state.user.pass !== this.state.user.pass2) {
      errorMsg = 'Passwords do not match';
      val = false;
    } else if (!this.state.user.phone) {
      val = false;
      errorMsg = 'Please enter a phone number';
    }
    this.setState({ authError: errorMsg });
    return val;
  }
  componentDidUpdate(_prevProps: Props, prevState: State): void {
    if (prevState.user !== this.state.user) {
      this.setState({ authError: '' });
    }
  }
  async signUp(actions: any): Promise<void> {
    if (this.validate()) {
      this.setState({ authError: '' });
      try {
        if (this.state.user.pass !== this.state.user.pass2) {
          this.setState({ authError: 'Passwords do not match' });
          return;
        }
        if (!this.validate()) return;
        Sentry.setUser({ email: this.state.user.email.toLowerCase() });

        this.setState({ sendingData: true });
        await Auth.signUp({
          username: this.state.user.email.toLowerCase(),
          password: this.state.user.pass,
          attributes: {
            family_name: this.state.user.last,
            given_name: this.state.user.first,
            phone_number: this.state.user.code + this.state.user.phone,
            email: this.state.user.email.toLowerCase(),
          },
        }).then(
          async () =>
            await this.changeAuthState(actions, 'confirmSignUp', {
              email: this.state.user.email.toLowerCase(),
            })
        );
      } catch (e) {
        this.setState({ authError: e.message, sendingData: false });
        Sentry.configureScope((scope) => {
          scope.setUser(null);
        });
      }
    }
  }

  /* handleEnter(
    actions: any,
    keyEvent: NativeSyntheticEvent<TextInputKeyPressEventData>
  ): void {
    if (keyEvent.nativeEvent.key === 'Enter') this.signUp(actions);
  }*/

  handleChange(field: keyof State['user'], input: string): void {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [field]: input,
      },
    }));
  }

  render(): React.ReactNode {
    return (
      <SignUp.UserConsumer>
        {({ userState, userActions }) => {
          if (!userState) return null;
          return (
            <>
              {userState.authState === 'signUp' ? (
                <div>
                  <div>
                    <button
                      //  accessibilityLabel="Go back"
                      // accessibilityHint="Navigate to previous page"
                      // accessibilityRole="button"
                      onClick={async () => {
                        await this.changeAuthState(userActions, 'signIn', null);
                      }}
                    >
                      <div>
                        <img src="warning.gif" color="#333333" />
                        Back
                      </div>
                    </button>
                  </div>
                  {
                    <div>
                      <div
                      //accessibilityRole="header"
                      >
                        Create your account
                      </div>
                      <div>
                        <div>*</div>
                        <input
                          // accessibilityLabel="First Name"
                          // textContentType="name"
                          type="text"
                          placeholder="First Name"
                          value={this.state.user.first}
                          onChange={(e) =>
                            this.handleChange('first', e.target.value)
                          }
                        ></input>
                        <div>*</div>
                        <input
                          // textContentType="familyName"
                          placeholder="Last Name"
                          value={this.state.user.last}
                          onChange={(e) =>
                            this.handleChange('last', e.target.value)
                          }
                        ></input>
                      </div>
                      <div>
                        <div>*</div>
                        <input
                          // autoCompleteType="email"
                          // textContentType="emailAddress"
                          // keyboardType="email-address"
                          type="email"
                          placeholder="Email Address"
                          value={this.state.user.email}
                          onChange={(e) =>
                            this.handleChange('email', e.target.value)
                          }
                        ></input>
                      </div>
                      <div>
                        <div>*</div>
                        <input
                          // textContentType="newPassword"
                          type="password"
                          placeholder="Create Password"
                          value={this.state.user.pass}
                          onChange={(e) =>
                            this.handleChange('pass', e.target.value)
                          }
                          //  secureTextEntry={true}
                        ></input>
                        <div>*</div>
                        <input
                          //  textContentType="newPassword"
                          type="password"
                          placeholder="Confirm Password"
                          value={this.state.user.pass2}
                          onChange={(e) =>
                            this.handleChange('pass2', e.target.value)
                          }
                          // secureTextEntry={true}
                        ></input>
                      </div>
                      <div>
                        {/*  <Picker
                          accessibilityLabel="Select country code"
                          selectedValue={this.state.user.code}
                          onValueChange={(val) =>
                            this.handleChange('code', val)
                          }
                          style={{
                            marginRight: 5,
                            borderColor: '#00000070',
                          }}
                        >
                          {countryDialCodes.map((dialCode) => (
                            <Picker.Item
                              key={dialCode}
                              value={dialCode}
                              label={dialCode}
                            />
                          ))}
                          </Picker>*/}
                        <div>*</div>
                        <input
                          // accessibilityLabel="Telephone number"
                          // autoCompleteType="tel"
                          // textContentType="telephoneNumber"
                          // onKeyPress={(e) => this.handleEnter(userActions, e)}
                          // keyboardType="phone-pad"
                          placeholder="Phone number"
                          value={this.state.user.phone}
                          onChange={(e) => {
                            if (
                              e.target.value.length < 11 &&
                              !e.target.value.match(/\D/g)
                            ) {
                              this.handleChange('phone', e.target.value);
                            }
                          }}
                        ></input>
                      </div>
                      <div>
                        <div>
                          <button onClick={() => this.signUp(userActions)}>
                            {this.state.sendingData ? (
                              <img src="activity-indicator.gif" />
                            ) : (
                              'Continue'
                            )}
                          </button>
                        </div>
                        <button
                          // accessibilityRole="button"
                          // accessibilityLabel="Confirm your account"
                          // accessibilityHint="For users already registered"

                          onClick={async () =>
                            await this.changeAuthState(
                              userActions,
                              'confirmSignUp',
                              null
                            )
                          }
                        >
                          <div>Confirm a code</div>
                        </button>
                      </div>

                      <div
                      // accessibilityLiveRegion={'assertive'}
                      // accessibilityRole="alert"
                      >
                        {this.state.authError ? (
                          <img src="warning.gif" color="#F0493E" />
                        ) : null}
                        {this.state.authError}
                      </div>
                    </div>
                  }
                </div>
              ) : null}
            </>
          );
        }}
      </SignUp.UserConsumer>
    );
  }
}
//export default MySignUp
