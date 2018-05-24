import React, { Component } from 'react';
import axios from 'axios';

//api: https://api.github.com/repos/facebook/react/contributors

class MyGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            graphdata: null
        };
    }
    componentWillMount(){
        axios.get('https://api.github.com/repos/facebook/react/contributors')
        .then(results => {
          this.setState({
              data: results.data
            });
        })
    }
    componentDidMount(){
        let setThisEqual = [];
        this.state.data.map(person =>{
            let tuple = [];
            tuple.push(person.login);
            tuple.push(person.contributions);
            setThisEqual.push(tuple);
        });
        this.setState({
            graphdata: setThisEqual
        });
    }
    render(){
        return(
            <div>
                hello, world!
                {console.log(this.state.data)}
                {console.log(this.state.graphdata)}
            </div>
        );
    }
}

export default MyGraph