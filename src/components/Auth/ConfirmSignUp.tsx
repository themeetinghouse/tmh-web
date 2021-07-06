import { Auth } from 'aws-amplify';
import React from 'react';
import * as Sentry from '@sentry/browser';
import { UserActions, UserContext } from './UserContext';
import { AuthStateData } from './AuthStateData';

interface Props {
  navigation?: any;
  route?: any;
}

interface State {
  email: string;
  code: string;
  authError: string;
  sendingData: boolean;
}
export default class ConfirmSignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log({ MYConfirmSignupImpl: props.route });
    this.state = {
      email: props.route?.params.email ?? '',
      code: '',
      authError: '',
      sendingData: false,
    };
  }
  static UserConsumer = UserContext.Consumer;

  async changeAuthState(
    actions: UserActions,
    state: string,
    data: AuthStateData | null
  ): Promise<void> {
    this.setState({
      email: '',
      code: '',
      authError: '',
      sendingData: false,
    });
    if (actions.onStateChange) await actions.onStateChange(state, data);
  }

  async handleConfirmSignUp(actions: UserActions): Promise<void> {
    try {
      this.setState({ sendingData: true });
      Sentry.setUser({ email: this.state.email.toLowerCase() });
      await Auth.confirmSignUp(
        this.state.email.toLowerCase(),
        this.state.code
      ).then(async () => {
        await this.changeAuthState(actions, 'signIn', {
          email: this.state.email.toLowerCase(),
        });
      });
    } catch (e) {
      this.setState({ authError: e.message, sendingData: false });
      Sentry.configureScope((scope) => {
        scope.setUser(null);
      });
    }
  }

  handleEnter(actions: any, keyEvent: any): void {
    if (keyEvent.nativeEvent.key === 'Enter') this.handleConfirmSignUp(actions);
  }

  render(): React.ReactNode {
    return (
      <ConfirmSignUp.UserConsumer>
        {({ userState, userActions }) => {
          if (!userState) return null;
          return (
            <>
              {userState.authState === 'confirmSignUp' ? (
                <div>
                  <div>
                    <div
                      //  accessibilityLabel="Go back"
                      //   accessibilityHint="Navigate to previous page"
                      //  accessibilityRole="button"
                      //  testID="myConfirmSignup-back"
                      onClick={async () => {
                        await this.changeAuthState(userActions, 'signIn', null);
                      }}
                    >
                      <div>
                        <img src="back.gif" />
                        Back
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                    //  accessibilityRole="header"
                    >
                      Enter your security code
                    </div>
                    <input
                      //autoCompleteType="email"
                      //accessibilityLabel="Email"
                      //textContentType="emailAddress"
                      //keyboardType="email-address"
                      placeholder="Email Address"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>
                    <div>
                      <input
                        //  textContentType="oneTimeCode"
                        //  accessibilityLabel="One time security code"
                        //  keyboardType="number-pad"
                        onKeyPress={(e) => this.handleEnter(userActions, e)}
                        placeholder="One-time security code"
                        value={this.state.code}
                        onChange={(e) =>
                          this.setState({ code: e.target.value })
                        }
                      ></input>
                      <button
                        //  accessibilityLabel="Submit verification code"
                        //  buttonType={ButtonTypes.SolidSignIn2}
                        onClick={() => this.handleConfirmSignUp(userActions)}
                      >
                        {this.state.sendingData ? (
                          <img
                            src="activity.gif"
                            //                            accessibilityRole="alert"
                            //                          accessibilityLabel="Loading"
                            //                        animating
                            //                      color="#333333"
                          />
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                    <div
                    //  accessibilityLiveRegion={'assertive'}
                    //   accessibilityRole="alert"
                    >
                      {this.state.authError ? <img src="warning.gif" /> : null}
                      {this.state.authError}
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          );
        }}
      </ConfirmSignUp.UserConsumer>
    );
  }
}
