import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import * as reactHotkeys from "react-hotkeys";

import ResourceLayout from "./Resource/ResourceLayout";
import Login from "./User/Login";
import Signup from "./User/Signup";
import WorkspaceLayout from "./Workspaces/WorkspaceLayout";

import PrivateRoute from "./authentication/PrivateRoute";
import NavigationTabsProvider from "./Layout/NavigationTabsProvider";
import ThemeProvider from "./Layout/ThemeProvider";
import { track, dispatch, init as initAnalytics } from "./util/analytics";
import { init as initPaddle } from "./util/paddle";
import RouteWithAnalytics from "./Layout/RouteWithAnalytics";
import AuthResourceWithGitCallback from "./Resource/git/AuthResourceWithGitCallback";
import { CreateServiceWizard } from "./Resource/create-resource/CreateServiceWizard";

const context = {
  source: "amplication-client",
};

export const enhance = track<keyof typeof context>(
  // app-level tracking data
  context,

  {
    dispatch,
  }
);

function App() {
  useEffect(() => {
    initAnalytics();
    initPaddle();
  }, []);

  //The default behavior across all <HotKeys> components
  reactHotkeys.configure({
    //Disable simulate keypress events for the keys that do not natively emit them
    //When Enabled - events are not captured after using Enter in <textarea/>
    simulateMissingKeyPressEvents: false,
    //Clear the ignoreTags array to includes events on textarea and input
    ignoreTags: [],
  });

  return (
    <ThemeProvider>
      <NavigationTabsProvider>
        <Switch>
          <RouteWithAnalytics path="/login">
            <Login />
          </RouteWithAnalytics>
          <RouteWithAnalytics path="/signup">
            <Signup />
          </RouteWithAnalytics>
          <PrivateRoute
            exact
            path="/github-auth-app/callback"
            component={AuthResourceWithGitCallback}
          />
          <PrivateRoute exact path="/" component={WorkspaceLayout} />
          <PrivateRoute path="/workspace" component={WorkspaceLayout} />
          <PrivateRoute path="/user/profile" component={WorkspaceLayout} />
          <PrivateRoute
            exact
            path="/create-resource"
            component={CreateServiceWizard} 
          />
          <PrivateRoute path="/:resource" component={ResourceLayout} />
        </Switch>
      </NavigationTabsProvider>
    </ThemeProvider>
  );
}

export default enhance(App);
