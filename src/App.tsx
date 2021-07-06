import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import HomePage from 'pages/HomePage';
import Authenticator from 'components/Auth/Authenticator';

interface Props extends RouteComponentProps<any> {
  match: any;
  history: History<any>;
}
interface State {
  content: any;
}
const RequireNewPassword = lazy(
  () => import('./components/Auth/RequireNewPassword')
);
const VerifyContact = lazy(() => import('./components/Auth/VerifyContact'));
const ForgotPassword = lazy(() => import('./components/Auth/ForgotPassword'));
const ConfirmSignUp = lazy(() => import('./components/Auth/ConfirmSignUp'));
const SignIn = lazy(() => import('./components/Auth/SignIn'));
const SignUp = lazy(() => import('./components/Auth/SignUp'));
const Admin = lazy(() => import('./pages/admin/index'));
const ImportVideo = lazy(() => import('./pages/admin/import-video'));
const CreateBlog = lazy(() => import('./pages/admin/create-blog'));
const CreateNotes = lazy(() => import('./pages/admin/create-notes'));
const AddLive = lazy(() => import('./pages/admin/livestream'));
const GetInsta = lazy(() => import('./pages/admin/instagram'));
const Announcements = lazy(() => import('./pages/admin/Announcements'));
const AccountMain = lazy(() => import('./pages/users/AccountMain'));

class App extends React.Component<Props, State> {
  render() {
    return (
      <Suspense fallback={<div></div>}>
        <Authenticator {...this.props}>
          <Switch key={this.props.location.pathname}>
            <Route path="/admin/import-video" render={() => <ImportVideo />} />
            <Route path="/admin/create-blog" render={() => <CreateBlog />} />
            <Route path="/admin/create-notes" render={() => <CreateNotes />} />
            <Route path="/admin/livestream" render={() => <AddLive />} />
            <Route path="/admin/instagram" render={() => <GetInsta />} />
            <Route
              path="/admin/announcements"
              render={() => <Announcements />}
            />
            <Route path="/admin" render={() => <Admin />} />
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/signup" render={() => <SignUp />} />
            <Route
              path="/requireNewPassword"
              render={() => <RequireNewPassword />}
            />
            <Route path="/verifyContact" render={() => <VerifyContact />} />
            <Route path="/confirmsignup" render={() => <ConfirmSignUp />} />
            <Route path="/forgotpassword" render={() => <ForgotPassword />} />
            <Route path="/account" render={() => <AccountMain />} />
            <Route path="*" render={(props) => <HomePage {...props} />} />
          </Switch>
        </Authenticator>
      </Suspense>
    );
  }
}
export default withRouter(App);
