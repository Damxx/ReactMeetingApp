import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2020-11-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2020-11-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvenet: null,
  };
  handleOpenForm = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };
  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({
      events: [...this.state.events, newEvent],
      isOpen: false,
    }));
  };
  handleCreateFormOpen = () => {
    this.setState({
      selectedEvenet: null,
      isOpen: true,
    });
  };
  handleFormCancel = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleSelectEvenet = (event) => {
    this.setState({
      selectedEvenet: event,
      isOpen: true,
    });
  };
  handleUpdateEvenet = (updatingEvent) => {
    this.setState(({ events }) => ({
      events: events.map((prevEvent) => {
        if (updatingEvent.id == prevEvent.id) {
          return updatingEvent;
        } else {
          return prevEvent;
        }
      }),
      isOpen: false,
      selectedEvenet: null,
    }));
  };
  handleDeleteEvenet = (id) => {
    this.setState(({ events }) => ({
      events: events.filter((e) => {
        if (e.id !== id) return e;
      }),
    }));
  };
  render() {
    const { events, isOpen, selectedEvenet } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleDeleteEvenet={this.handleDeleteEvenet}
            selectedEvenet={this.handleSelectEvenet}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              selectedEvenet={selectedEvenet}
              handleCreateEvent={this.handleCreateEvent}
              cancelForm={this.handleFormCancel}
              handleUpdateEvenet={this.handleUpdateEvenet}
              key={selectedEvenet ? selectedEvenet.id : 0}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
