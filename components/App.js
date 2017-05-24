import React, { Component } from 'react'
import Timeline from './Timeline'
import ClickEvents from './ClickEvents'
import Sidebar from './Sidebar'

import '../css/app.css'

export default class App extends Component {
    render () {
        return (
            <div className="app">
                <Sidebar/>
                <div className="main">
                    <div className="top">
                        <div className="logo"/>
                        <div className="user">Michael Smart</div>
                    </div>
                    {/*<Timeline placeholders={5}/>*/}
                    <ClickEvents />
                </div>
            </div>
        )
    }
}

