import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'semantic-ui-react'
import EventDashboard from './app/features/event/EventDashboard/EventDashboard';
import NavBar from './app/features/NavBar/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Container className="main">
        <EventDashboard/>
      </Container>
    </Fragment>
  );
}

export default App;
