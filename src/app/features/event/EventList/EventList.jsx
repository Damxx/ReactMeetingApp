import React, { Component } from "react";
import EventListItem from "./EventListItem";
import { Fragment } from "react";

class EventList extends Component {
  render() {
    const { events, selectedEvenet,handleDeleteEvenet } = this.props;
    return (
      <Fragment>
        {events.map((e) => (
          <EventListItem
            key={e.id}
            event={e}
            handleDeleteEvenet={handleDeleteEvenet}
            selectedEvenet={selectedEvenet}
          />
        ))}
      </Fragment>
    );
  }
}
export default EventList;
