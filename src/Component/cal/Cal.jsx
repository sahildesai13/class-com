import React, { Component } from 'react'
import './Cal.css';
export default class Cal extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            oldInput: '',
            cal: '',
        }

    }
    data = (e) => {
        this.setState({
            input: this.state.input + e,
        })
    }
    calculate(e){
        this.setState({
            oldInput: this.state.input,
            cal: this.state.input + this.state.oldInput,
        })
    }
    render() {
        return (
            <div>
                <div className='box'>
                    <input type="number" className='inputBox' value={this.state.input} />
                    <div className="keyPad">
                        <div className="key" onClick={() => { this.data('1') }}>1</div>
                        <div className="key" onClick={() => { this.data('2') }}>2</div>
                        <div className="key" onClick={() => { this.data('3') }}>3</div>
                        <div className="key" onClick={() => { this.calculate('+') }}>+</div>
                        <div className="key" onClick={() => { this.data('4') }}>4</div>
                        <div className="key" onClick={() => { this.data('5') }}>5</div>
                        <div className="key" onClick={() => { this.data('6') }}>6</div>
                        <div className="key" onClick={() => { this.calculate('-') }}>-</div>
                        <div className="key" onClick={() => { this.data('7') }}>7</div>
                        <div className="key" onClick={() => { this.data('8') }}>8</div>
                        <div className="key" onClick={() => { this.data('9') }}>9</div>
                        <div className="key" onClick={() => { this.calculate('x') }}>x</div>

                    </div>
                </div>
            </div>
        )
    }
}
