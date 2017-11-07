import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const input = e.target.elements.input.value.trim();
        const error = this.props.addItem(input);
        this.setState(() => ({error}));
        if(!error) {
            e.target.elements.input.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='input'/>
                    <button>Add Option</button>
                </form>
                {this.state.error && <h3>{this.state.error}</h3>}
            </div>
        );
    }
}