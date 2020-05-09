import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container } from "semantic-ui-react";
import EventDashboard from "./app/features/event/EventDashboard/EventDashboard";
import NavBar from "./app/features/nav/NavBar/NavBar";
import { Route, Link } from "react-router-dom";
import HomePage from "./app/features/home/HomePage";
import EventDetailedPage from "./app/features/event/EventDetailed/EvenDetailedPage";
import PeopleDashboard from "./app/features/User/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "./app/features/User/UserDetailed/UserDetailedPage";
import SettingsDashboard from "./app/features/User/Settings/SettingsDashboard";
import EventForm from "./app/features/event/EventForm/EventForm";
import TestComponenet from "./app/features/testarea/TestComponenet";

function App() {
  return (
    <Fragment>
      <Route path="/" exact component={HomePage}></Route>
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createEvent" component={EventForm} />
              <Route path="/test" component={TestComponenet} />
            </Container>
          </Fragment>
        )}
      ></Route>
    </Fragment>
  );
}

export default App;
