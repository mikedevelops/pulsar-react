import React, { Component } from 'react'

export default class Button extends Component {
    increase () {
        this.props.buttonClick('this came from the button')
    }

    render () {
        return <button onClick={this.increase.bind(this)}>Button</button>
    }
}
