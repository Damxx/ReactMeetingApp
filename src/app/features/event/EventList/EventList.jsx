import React, { Component } from 'react'
import EventListItem from './EventListItem'
import { Fragment } from 'react'

class EventList extends Component {
    
    render() {
        return (
            
            <Fragment>
                {this.props.events.map(e => (
                    <EventListItem key={e.id} event={e} />
                ))}
            </Fragment>
        )
    }
}
export default EventList
