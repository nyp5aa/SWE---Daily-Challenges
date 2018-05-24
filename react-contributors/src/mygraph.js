import React, { Component } from 'react';
import axios from 'axios';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

//api: https://api.github.com/repos/facebook/react/contributors

class MyGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            graphdata: null,
            xAxis: null,
            yAxis: null
        };
    }
    componentDidMount(){
        axios.get('https://api.github.com/repos/facebook/react/contributors')
        .then(results => {
          this.setState({
              data: results.data
            });
            let setThisEqual = [];
            this.state.data.map(person =>{
                if(setThisEqual.length < 10){
                    let tuple = {
                        login: person.login,
                        contributions: person.contributions
                    };
                    setThisEqual.push(tuple);
                }
            });
            this.setState({
                graphdata: setThisEqual
            });
            let setThisAsX = [];
            let setThisAsY = [];
            this.state.graphdata.map(o =>{
                setThisAsX.push(o.login);
            });
            this.state.graphdata.map(o =>{
                setThisAsY.push(o.contributions);
            });
            this.setState({
                xAxis: setThisAsX,
                yAxis: setThisAsY
            });
        })
    }
    render(){
        return(
        <VictoryChart domainPadding={5}>
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                tickFormat={this.state.xAxis}
            />
            <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={this.state.yAxis}
            />
            <VictoryBar
                data={this.state.graphdata}
                x="contributors"
                y="contributions"
            />
            <div>
                {console.log(this.state.xAxis)}
                {console.log(this.state.yAxis)}
            </div>
        </VictoryChart>
        );
    }
}

/*const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];*/

export default MyGraph