import React, { Component } from 'react'
import { fakeApiCall } from '../helpers/helpers'

import '../css/placeholders.css'
import '../css/timeline.css'

export default class Timeline extends Component {
    constructor () {
        super()
        this.state = {
            messages: []
        }
    }

    componentWillMount () {
        fakeApiCall('/messages', 5000).then(messages => {
            // 1. set component state with message data
            this.setState({ messages })
        })
    }

    buildTimelineMessages () {
        // 1. loop through messages
        // 3. return markup
        return this.state.messages.map(message => (
            // 2. create message markup
            <div key={message.text} className="message">
                <div className="message__avatar" style={{ backgroundColor: message.avatar }}>
                    { message.author }
                </div>
                <div className="message__text">
                    { message.text }
                </div>
            </div>
        ))
    }

    buildTimelineMessagesPlaceholders (amount) {
        const placeholders = []

        for (let i = 0; i < amount; i ++) {
            placeholders.push(<div key={i} className="placeholder"></div>)
        }

        return <div className="placeholders">{ placeholders }</div>
    }

    render () {
        return (
            <div className="timeline">
                <div className="timeline__messages">
                    { this.state.messages.length
                        ? this.buildTimelineMessages()
                        : this.buildTimelineMessagesPlaceholders(10)
                    }
                </div>
            </div>
        )
    }
}
