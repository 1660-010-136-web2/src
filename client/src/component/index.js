import React, { Component } from 'react'
import io from 'socket.io-client/dist/socket.io'
export default class index extends Component {
    constructor(pros) {
        super(pros);
        this.socket = io('http://localhost:8080/')
    }
    render() {
        return (
            <h1>
                HOME
            </h1>
        )
    }
}
