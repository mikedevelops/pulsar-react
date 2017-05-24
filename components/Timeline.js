// import our libraries and helpers
import React, { Component } from 'react'
import PlaceholderContainer from './PlaceholderContainer'
import { fakeApiCall } from '../helpers/helpers'

// some css imports (a hotly debated topic)
import '../css/placeholders.css'
import '../css/timeline.css'

export default class Timeline extends Component {
    constructor () {
        super()
        // initialize our component with a state object
        // let's start with an empty list of messages
        this.state = {
            messages: [],
            color: 'green'
        }
    }

    componentDidUpdate () {
        console.log('updated')
    }

    // React life cycle method - componentWillMount
    // called once prior to the first render call
    componentWillMount () {
        setTimeout(() => {
            this.setState({ color: 'red' })
        }, 5000)

        // fakeApiCall('/messages', 5000).then(messages => {
        //     // 1. set component state with message data
        //     this.setState({ messages })
        // }).catch(err => console.log)
    }

    // return our time line messages as JSX
    buildTimelineMessages () {
        // 1. loop through messages
        // 2. return message markup
            // (key, avatar, author, text)
        return this.state.messages.map(message => (
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

    // React method - render our component to the DOM
    // this will be called when state or props change
    render () {
        return (
            <div className="timeline">
                <div className="timeline__messages">
                   {
                        this.state.messages.length
                            ? this.buildTimelineMessages()
                            : <PlaceholderContainer color={this.state.color} amount={50}/>
                   }
                </div>
            </div>
        )
    }
}
