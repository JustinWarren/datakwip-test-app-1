// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'; //Imports Navbar Component in for use in app.js
import Maincontainer from './components/Maincontainer'; //Imports Navbar Component in for use in app.js
// import NewDataListItem from './components/NewDataListItem';
class App extends Component {
  state = {
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />
        <Maincontainer/>
        {/* <NewDataListItem /> */}
      </div>
    );

  }
  
}


export default App;
