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
        })
    }

    buildTimelineMessages () {
        // 1. loop through messages
        // 2. return message markup
            // (key, avatar, author, text)
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
                    { /* Build timeline messages or render placehooders... */}
                </div>
            </div>
        )
    }
}
