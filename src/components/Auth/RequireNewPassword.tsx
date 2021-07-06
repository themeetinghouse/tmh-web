import { Auth } from 'aws-amplify';
//import countryDialCodes from 'aws-amplify-react-native/src/CountryDialCodes';
import React from 'react';
import { EmptyProps } from 'utils';

import { UserActions, UserContext, UserState } from './UserContext';

interface State {
  first: string;
  last: string;
  code: string;
  phone: string;
  email: string;
  authError: string;
  newPass: string;
  newPass2: string;
  resetting: boolean;

  authState: any;
}

class RequireNewPassword extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      phone: '',
      code: '+1',
      first: '',
      last: '',
      email: '',
      authError: '',
      newPass: '',
      newPass2: '',
      resetting: false,

      authState: null,
    };
  }
  static UserConsumer = UserContext.Consumer;

  async changeAuthState(actions: UserActions, state: string): Promise<void> {
    this.setState({
      phone: '',
      first: '',
      last: '',
      email: '',
      authError: '',
      code: '+1',
      newPass: '',
      newPass2: '',
      resetting: false,
    });
    if (actions.onStateChange) await actions.onStateChange(state, null);
  }

  async save(actions: UserActions, userState: UserState): Promise<void> {
    console.log('Saving');
    try {
      if (this.state.newPass !== this.state.newPass2) {
        this.setState({ authError: 'Passwords do not match' });
        return;
      }
      await Auth.completeNewPassword(userState.user, this.state.newPass, {
        family_name: this.state.last,
        given_name: this.state.first,
        phone_number: this.state.code + this.state.phone,
      })
        .then(async () => {
          await this.changeAuthState(actions, 'signedIn');
        })
        .catch((e) => {
          console.log({ Error: e });
        });
    } catch (e) {
      this.setState({ authError: e.message, resetting: false });
    }
  }

  handleEnter(actions: UserActions, userState: UserState, keyEvent: any): void {
    if (keyEvent.nativeEvent.key === 'Enter') {
      this.save(actions, userState);
    }
  }

  render(): React.ReactNode {
    return (
      <RequireNewPassword.UserConsumer>
        {({ userState, userActions }) => {
          if (!userState) return null;
          return (
            <>
              {userState.authState === 'requireNewPassword' ? (
                <div>
                  <div>
                    <div
                      // accessibilityRole="button"
                      //  accessibilityLabel="Go back"
                      //  accessibilityHint="Navigate to previous page"
                      onClick={async () => {
                        await this.changeAuthState(userActions, 'signIn');
                      }}
                    >
                      <div>
                        <img src="left.gif" />
                        Back
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>Tell us more about yourself</div>
                    <div>
                      <input
                        placeholder="First Name"
                        //  accessibilityLabel="First Name"
                        value={this.state.first}
                        onChange={(e) =>
                          this.setState({ first: e.target.value })
                        }
                        //    secureTextEntry={false}
                      ></input>
                      <input
                        placeholder="Last Name"
                        //    accessibilityLabel="Last Name"
                        value={this.state.last}
                        onChange={(e) =>
                          this.setState({ last: e.target.value })
                        }
                        // secureTextEntry={false}
                      ></input>
                    </div>
                    <div>
                      {/*   <Picker
                        accessibilityLabel="Country code"
                        selectedValue={this.state.code}
                        onValueChange={(val) => this.setState({ code: val })}
                        style={{ marginRight: 5, borderColor: '#00000070' }}
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
                        //    autoCompleteType="tel"
                        //    accessibilityLabel="Telephone number"
                        //    textContentType="telephoneNumber"
                        onKeyPress={(e) => {
                          this.handleEnter(userActions, userState, e);
                        }}
                        //   keyboardType="phone-pad"
                        placeholder="Phone number"
                        value={this.state.phone}
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                      ></input>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '5.5%',
                      }}
                    >
                      <input
                        // textContentType="newPassword"
                        onKeyPress={(e) => {
                          this.handleEnter(userActions, userState, e);
                        }}
                        // accessibilityLabel="New password"
                        placeholder="New password"
                        value={this.state.newPass}
                        onChange={(e) =>
                          this.setState({ newPass: e.target.value })
                        }
                        //   secureTextEntry={true}
                      ></input>
                      <input
                        // accessibilityLabel="Confirm new password"
                        // textContentType="newPassword"
                        onKeyPress={(e) => {
                          this.handleEnter(userActions, userState, e);
                        }}
                        placeholder="Confirm new password"
                        value={this.state.newPass2}
                        onChange={(e) =>
                          this.setState({ newPass2: e.target.value })
                        }
                        // secureTextEntry={true}
                      ></input>
                    </div>
                    <button
                      //  accessibilityLabel="Submit changes"
                      // buttonType={ButtonTypes.SolidSignIn}
                      onClick={() => {
                        this.save(userActions, userState);
                      }}
                    >
                      {this.state.resetting ? (
                        <img src="loading.gif" />
                      ) : (
                        'Submit'
                      )}
                    </button>
                    <div
                    //   accessibilityLiveRegion={'assertive'}
                    //   accessibilityRole="alert"
                    >
                      {this.state.authError ? <img src="warning.gif" /> : null}{' '}
                      {this.state.authError}
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          );
        }}
      </RequireNewPassword.UserConsumer>
    );
  }
}
export default RequireNewPassword;
