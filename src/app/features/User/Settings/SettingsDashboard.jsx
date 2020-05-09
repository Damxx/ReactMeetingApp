import React from "react";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import { Route, Switch, Redirect } from "react-router-dom";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";

function SettingsDashboard() {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic"></Redirect>
          <Route path="/settings/basic" component={BasicPage}></Route>
          <Route path="/settings/about" component={AboutPage}></Route>
          <Route path="/settings/photos" component={PhotosPage}></Route>
          <Route path="/settings/account" component={AccountPage}></Route>
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <h1>
          <SettingsNav />
        </h1>
      </Grid.Column>
    </Grid>
  );
}

export default SettingsDashboard;
