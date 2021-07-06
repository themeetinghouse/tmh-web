import React from 'react';
import { EmptyProps } from 'utils';
import { UserContext } from './UserContext';

class VerifyContact extends React.Component<EmptyProps> {
  constructor(props: EmptyProps) {
    super(props);
  }
  static UserConsumer = UserContext.Consumer;

  render(): React.ReactNode {
    return (
      <VerifyContact.UserConsumer>
        {({ userState }) => {
          if (!userState) return null;
          return (
            <>
              {userState.authState === 'verifyContact' ? (
                <div>
                  <div>{super.render()}</div>
                </div>
              ) : null}
            </>
          );
        }}
      </VerifyContact.UserConsumer>
    );
  }
}
export default VerifyContact;
