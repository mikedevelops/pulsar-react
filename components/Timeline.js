// import our libraries and helpers
import React, { Component } from 'react'
import { fakeApiCall } from '../helpers/helpers'

// some css imports (a hotly debated topic)
import '../css/placeholders.css'
import '../css/timeline.css'

export default class Timeline extends Component {
    constructor () {
        super()
        // 1. initialize our component with a state object
        // 2. let's start with an empty list of messages
        this.state = {
            messages: []
        }
    }

    // React lifecycle method - componentWillMount
    // called once prior to the first render call
    componentWillMount () {
        fakeApiCall('/messages', 5000).then(messages => {
            // 1. set component state with message data
        }).catch(err => console.log)
    }

    // return our timeline messages as JSX
    buildTimelineMessages () {
        // 1. loop through messages
        // 2. return message markup
            // (key, avatar, author, text)
    }

    // build timeline message placehodlers
    buildTimelineMessagesPlaceholders (amount) {
        const placeholders = []
        // create placeholders in a loop and
        // push to our placeholders array
        for (let i = 0; i < amount; i ++) {
            placeholders.push(<div key={i} className="placeholder"></div>)
        }
        // return our placeholders as a wrapper
        return <div className="placeholders">{ placeholders }</div>
    }

    // React method - render our component to the DOM
    // this will be called when state or props change
    render () {
        return (
            <div className="timeline">
                <div className="timeline__messages">
                    { /*
                        Build timeline messages or render placeholders...
                    */}
                </div>
            </div>
        )
    }
}
