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
    console.log(this.state.listOfAllContracts);
  }
  render() {
    let data = this.state.listOfAllContracts.map(cont => {
      console.log(this.state.listOfAllContracts.length);
      return(
      <div>
        <h4> Contract </h4>
        <div>{cont.name}</div>
        <div>{cont.company}</div>
        <div>{cont.detail}</div>
      </div>
    )});
    return (
      <div className="App">
        <MyForm usedToUpdate={this.saveValue}/>
        <button onClick={this.addToList}> SUBMIT </button>
        {data}
      </div>
    );
  }
}

export default App;
