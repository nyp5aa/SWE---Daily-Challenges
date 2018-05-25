import React, { Component } from 'react';
import './App.css';
import MyForm from './myForm'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOfAllContracts: [],
      currentName: null,
      currentCompany: null,
      currentDetail: null
    }
  }
  saveValue=(num, value)=>{
    if(num === 1){
      this.setState({
        currentName: value
      });
    }
    else if(num === 2){
      this.setState({
        currentCompany: value
       });
    }
    else{
      this.setState({
        currentDetail: value
      });
    }
  }
  addToList=()=>{
    let trips = {
      name: this.state.currentName,
      company: this.state.currentCompany,
      detail: this.state.currentDetail
    }
    let dummyList = this.state.listOfAllContracts;
    dummyList.push(trips);
    this.setState({
      currentName: null,
      currentCompany: null,
      currentDetail: null,
      listOfAllContracts: dummyList
    });
    document.getElementById("n").value="";
    document.getElementById("c").value="";
    document.getElementById("d").value="";
  }
  diverge=(obj)=>{
    let returnThis = obj.name + "   " + obj.company + "   " + obj.detail;
    return(
      returnThis
    );
  }
  render() {
    return (
      <div className="App">
        <MyForm usedToUpdate={this.saveValue}/>
        <button onClick={this.addToList}> SUBMIT </button>
        <div>
          {this.state.listOfAllContracts.map(cont => (
            <div>{this.diverge(cont)}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
