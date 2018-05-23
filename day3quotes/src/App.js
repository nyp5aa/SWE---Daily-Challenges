import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Quotes from './quotes';
import './App.css';

let q = ["Our greatest glory is not in never falling, but in rising every time we fall.",
 'All our dreams can come true, if we have the courage to pursue them.', 
 ' It does not matter how slowly you go as long as you do not stop.',
'Everything you’ve ever wanted is on the other side of fear.',
'Success is not final, failure is not fatal: it is the courage to continue that counts.'];

class App extends Component {
  render() {
    return (
      <Quotes passin={q}/>
    );
  }
}

export default App;