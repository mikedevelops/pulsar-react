import React, { Component } from 'react'

export default class Placeholder extends Component {
    render () {
        return (
            <div style={ { backgroundColor: this.props.background } } className="placeholder">

            </div>
        )
    }
}
