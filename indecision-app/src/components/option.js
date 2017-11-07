import React, {Component} from 'react';

export default class Option extends Component{
    constructor(props){
        super(props);
        this.handleOneDelete = this.handleOneDelete.bind(this);
    }

    handleOneDelete() {
        this.props.removeAnItem(this.props.item);
    }
    render() {
        return (
            <div>
            <h4>{this.props.item} <button onClick={this.handleOneDelete}>Done</button></h4>
            </div>
        );
    }
}