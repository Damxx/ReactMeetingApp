import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    eventDate: "",
    city: "",
    venue: "",
    hosted: "",
  };

  handleChangeInput = (event) => {
    const {name,value} = event.target
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { cancelForm } = this.props;
    const { title, eventDate, city, venue, hosted } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={title}
              onChange={this.handleChangeInput}
              id="eventTitle"
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="eventDate"
              value={eventDate}
              onChange={this.handleChangeInput}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={city}
              onChange={this.handleChangeInput}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={venue}
              onChange={this.handleChangeInput}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hosted"
              value={hosted}
              onChange={this.handleChangeInput}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelForm} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default EventForm;
