import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickySelect from './components/StickySelect.jsx';

const SELECT_OPTIONS = [
  { text: "New", value: "new" },
  { text: "Used", value: "used" },
  { text: "Mint", value: "mint" },
  { text: "As Is", value: "as_is" },
  { text: "All", value: "all" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickySelect
          options={SELECT_OPTIONS}
        />
      </div>
    );
  }
}

export default App;
