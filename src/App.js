import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Button, Grid, Popup } from 'semantic-ui-react';
import PopupExampleNested from './buttons';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          cards: [],
          results: []
      };
  }

  search = (e) => {
      let lowercase = e.target.value.toLowerCase();
      
  };

  async componentDidMount() {
      
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>For The Record</h1>
            <h2>Coding Challenge</h2>
          </header>
          <div className="prompt" />
          <PopupExampleNested />
          <div className="answers">
            Lets just placehold this one
          </div>
        </div>
      );
  }
}

export default App;
