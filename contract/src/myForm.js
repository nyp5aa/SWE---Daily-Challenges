import React, { Component } from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1> Enter Information Below </h1>
                <div>
                    <input id="n" type="text" placeholder="Name" onChange={(e) => this.props.usedToUpdate(1, e.target.value)}/>
                </div>
                <div>
                    <input id="c" type="text" placeholder="Company" onChange={(e) => this.props.usedToUpdate(2, e.target.value)}/>
                </div>
                <div>
                    <input id="d" type="text" placeholder="Detail" onChange={(e) => this.props.usedToUpdate(3, e.target.value)}/>
                </div>
            </div> 
        )
    }
}

export default MyForm