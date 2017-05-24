import React, { Component } from 'react'
import Placeholder from './Placeholder'

export default class PlaceholderContainer extends Component {
    buildPlaceholders (amount) {
        const placeholders = []

        for (let i = 0; i < amount; i++) {
            placeholders.push(<Placeholder background={this.props.color} key={i}/>)
        }

        return placeholders
    }

    render () {
        return (
            <div className="placeholder__list">
                { this.buildPlaceholders(this.props.amount) }
            </div>
        )
    }
}
