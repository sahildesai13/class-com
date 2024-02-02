import React, { Component } from 'react';

export default class Practice extends Component {
    constructor() {
        super();
        this.state = {
            name: 'practice',
            email: 'practice@example.com',
            number: '123'
        }
    }
    data = () => {
        this.setState({ name: 'sahil', email: 'sahil@example.com', number: '13' });
    }
    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <h3>{this.state.email}</h3>
                <h3>{this.state.number}</h3>
                <button onClick={this.data}>Change Value</button>
            </div>
        )
    }
}
