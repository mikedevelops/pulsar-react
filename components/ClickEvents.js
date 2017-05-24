import React, { Component } from 'react'
import Button from './Button'

export default class ClickEvents extends Component {
    constructor () {
        super()

        this.state = {
            count: 0,
            win: false
        }
    }

    increase (message) {
        console.log(message)

        const oldCount = this.state.count
        const newCount = oldCount + 1
        const win = newCount >= 5

        this.setState({
            count: newCount,
            win
        })
    }

    render () {
        return (
            <div>
                { this.state.win && <pre>You won!</pre> }
                <pre>event count: {this.state.count}</pre>
                <Button buttonClick={this.increase.bind(this)}/>
            </div>
        )
    }
}
