import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, selectedEvenet, handleDeleteEvenet } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={this.props.event.hostPhotoURL}
              />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.ntdate}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map((e) => (
                <EventListAttendee key={e.id} attendees={e} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={() => selectedEvenet(event)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
          <Button
            onClick={() => handleDeleteEvenet(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
