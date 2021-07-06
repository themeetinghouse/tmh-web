import { Auth } from 'aws-amplify';
import React from 'react';
import * as Sentry from '@sentry/browser';
import { UserActions, UserContext } from './UserContext';
interface Props {
  navigation?: any;
  route?: any;
}

interface State {
  email: string;
  authError: string;
  codeSent: boolean;
  code: string;
  newPass: string;
  newPass2: string;
  sendingCode: boolean;
  resetting: boolean;
}

class ForgotPassword extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      authError: '',
      codeSent: false,
      code: '',
      newPass: '',
      newPass2: '',
      sendingCode: false,
      resetting: false,
    };
  }
  static UserConsumer = UserContext.Consumer;

  async changeAuthState(actions: UserActions, state: string): Promise<void> {
    this.setState({
      email: '',
      authError: '',
      codeSent: false,
      code: '',
      newPass: '',
      newPass2: '',
      sendingCode: false,
      resetting: false,
    });
    if (actions.onStateChange) await actions.onStateChange(state, null);
  }

  async sendCode(): Promise<void> {
    try {
      this.setState({ sendingCode: true });
      Sentry.setUser({ email: this.state.email.toLowerCase() });
      await Auth.forgotPassword(this.state.email.toLowerCase()).then(() =>
        this.setState({ codeSent: true })
      );
    } catch (e) {
      this.setState({ authError: e.message, sendingCode: false });
      Sentry.configureScope((scope) => {
        scope.setUser(null);
      });
    }
  }

  async resetPass(actions: any): Promise<void> {
    try {
      if (this.state.newPass !== this.state.newPass2) {
        this.setState({ authError: 'Passwords do not match' });
        return;
      }
      this.setState({ resetting: true });
      Sentry.setUser({ email: this.state.email.toLowerCase() });

      await Auth.forgotPasswordSubmit(
        this.state.email.toLowerCase(),
        this.state.code,
        this.state.newPass
      ).then(async () => {
        await this.changeAuthState(actions, 'signIn');
      });
    } catch (e) {
      this.setState({ authError: e.message, resetting: false });
      Sentry.configureScope((scope) => {
        scope.setUser(null);
      });
    }
  }

  handleEnter(actions: any, keyEvent: any): void {
    if (keyEvent.nativeEvent.key === 'Enter') {
      if (this.state.codeSent) {
        this.resetPass(actions);
      } else {
        this.sendCode();
      }
    }
  }

  render(): React.ReactNode {
    return (
      <ForgotPassword.UserConsumer>
        {({ userState, userActions }) => {
          if (!userState) return null;
          return (
            <>
              {userState.authState === 'forgotPassword' ? (
                <div>
                  <div>
                    <div
                      // accessibilityLabel="Go back"
                      // accessibilityHint="Navigate to previous page"
                      // accessibilityRole="button"
                      onClick={async () => {
                        await this.changeAuthState(userActions, 'signIn');
                      }}
                    >
                      <div>
                        <img src="back.gif" />
                        Back
                      </div>
                    </div>
                  </div>
                  {!this.state.codeSent ? (
                    <div>
                      <div
                      //accessibilityRole="header"
                      >
                        Reset your password
                      </div>
                      <input
                        //   autoCompleteType="email"
                        //  textContentType="emailAddress"
                        //  keyboardType="email-address"
                        onKeyPress={(e) => this.handleEnter(userActions, e)}
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        //  secureTextEntry={false}
                      ></input>
                      <button
                        //    buttonType={ButtonTypes.SolidSignIn}
                        //  accessibilityLabel="Send security code"
                        onClick={() => this.sendCode()}
                      >
                        {this.state.sendingCode ? (
                          <img src="activity.gif" />
                        ) : (
                          'Send'
                        )}
                      </button>
                      <div
                        // accessibilityRole="button"
                        // accessibilityLabel="Verify your account"
                        // accessibilityHint="Navigate to account verification page"
                        onClick={() =>
                          this.setState({ codeSent: true, authError: '' })
                        }
                      >
                        <div>Submit a code</div>
                      </div>
                      <div
                      //   accessibilityLiveRegion={'assertive'}
                      //  accessibilityRole="alert"
                      >
                        {this.state.authError ? (
                          <img src="warning.gif" />
                        ) : null}{' '}
                        {this.state.authError}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>Reset your password</div>
                      <input
                        //autoCompleteType="email"
                        //textContentType="emailAddress"
                        //keyboardType="email-address"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        // secureTextEntry={false}
                      ></input>
                      <input
                        //textContentType="oneTimeCode"
                        // keyboardType="number-pad"
                        placeholder="One-time security code"
                        value={this.state.code}
                        onChange={(e) =>
                          this.setState({ code: e.target.value })
                        }
                        // secureTextEntry={false}
                      ></input>
                      <div>
                        <input
                          // textContentType="newPassword"
                          onKeyPress={(e) => this.handleEnter(userActions, e)}
                          placeholder="New password"
                          value={this.state.newPass}
                          onChange={(e) =>
                            this.setState({ newPass: e.target.value })
                          }
                          // secureTextEntry={true}
                        ></input>
                        <input
                          //textContentType="newPassword"
                          onKeyPress={(e) => this.handleEnter(userActions, e)}
                          placeholder="Confirm new password"
                          value={this.state.newPass2}
                          onChange={(e) =>
                            this.setState({ newPass2: e.target.value })
                          }
                          //secureTextEntry={true}
                        ></input>
                      </div>
                      <button
                        //  buttonType={ButtonTypes.SolidSignIn}
                        onClick={() => this.resetPass(userActions)}
                      >
                        {this.state.resetting ? (
                          <img src="activity.gif" />
                        ) : (
                          'Submit'
                        )}
                      </button>
                      <div
                      //  accessibilityLiveRegion={'assertive'}
                      // accessibilityRole="alert"
                      >
                        {this.state.authError ? (
                          <img src="warning.gif" />
                        ) : null}{' '}
                        {this.state.authError}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </>
          );
        }}
      </ForgotPassword.UserConsumer>
    );
  }
}
export default ForgotPassword;
