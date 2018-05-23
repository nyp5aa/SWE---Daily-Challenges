import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Quotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }
    inc=()=>{
        if(this.props.passin.length > this.state.count + 1){
            this.setState({
                count: this.state.count+1
            });
        }
        else{
            this.setState({
                count: 0
            });
        }
    }
    render(){
        return (
            <div>
            <h1> {this.props.passin[this.state.count]} </h1>
            <button onClick={this.inc}> Click Me! </button>
            </div>);
    }
}

export default Quotes