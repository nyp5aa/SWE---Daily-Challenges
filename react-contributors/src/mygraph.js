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
                setThisAsY.push(o.contributions);
            });
            this.setState({
                xAxis: setThisAsX,
                yAxis: setThisAsY,
            });
        })
    }
    render(){
        return(
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                tickFormat={this.state.xAxis}
                style={{
                    tickLabels: {fontSize: 4.5, padding: 10}
                }}
            />
            <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickValues={[200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]}
                tickFormat={[200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]}
                style={{
                    tickLabels: {fontSize: 7, padding: 10}
                }}
            />
            <VictoryBar
                data={this.state.graphdata}
                x="login"
                y="contributions"
            />
        </VictoryChart>
        );
    }
}

export default MyGraph