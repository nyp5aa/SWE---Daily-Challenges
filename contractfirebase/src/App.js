import React, { Component } from "react";
import ContractForm from "./ContractForm.js";
import ContractDisplay from "./ContractDisplay.js";
import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBZ9cYm2wsbYsWcLkvlBxXqBzwJTLyx6Sk",
  authDomain: "fir-a9545.firebaseapp.com",
  databaseURL: "https://fir-a9545.firebaseio.com",
  projectId: "fir-a9545",
  storageBucket: "fir-a9545.appspot.com",
  messagingSenderId: "996672147008"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
      curName: "",
      curCompany: "",
      curDetails: ""
    };
  }

  updateFields = (field, newValue) => {
    this.setState({
      // the bracket syntax says to take the field variable, look inside, and that
      // string will be the field we use
      [field]: newValue
    });
  };

  addContract = () => {
    const contractRef = firebase.database().ref('contracts');
    const { curName, curCompany, curDetails } = this.state;
    const newContract = {
      name: curName,
      company: curCompany,
      details: curDetails
    };
    contractRef.push(newContract);

    let newContractArray = this.state.contracts.slice(); // using slice to make a (shallow) copy
    newContractArray.push(newContract);
    this.setState({
      contracts: newContractArray,
      // clear the inputs
      curName: "",
      curCompany: "",
      curDetails: ""
    });
  };

  componentDidMount(){
    const contractsRef = firebase.database().ref('contracts');
    contractsRef.on('value', (snapshot) => {
      let allContracts = snapshot.val();
      let newState = [];
      for (let contract in allContracts) {
        newState.push({
          name: allContracts[contract].name,
          company: allContracts[contract].company,
          details: allContracts[contract].details
        });
      }
      this.setState({
        contracts: newState
      });
    });
  }

  render() {
    const { curName, curCompany, curDetails, contracts } = this.state;
    // map over the contracts, for each one return a ContractDisplay
    const contractDisplays = contracts.map(contract => {
      return <ContractDisplay delContract={this.delContract} contract={contract} />;
    });

    return (
      <div className="App">
        <ContractForm
          name={curName}
          company={curCompany}
          details={curDetails}
          updateParent={this.updateFields}
          addContract={this.addContract}
        />

        {contractDisplays}
      </div>
    );
  }
}

export default App;