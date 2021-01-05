import './App.css';
import React, { Component } from 'react';


class App extends Component {
  state = {
    navItems: [
      {url: "/classlist", name: "Class List"}, 
      {url: "/monsterlist", name: "Scary Monsters"}, 
      {url: "/spellSearch", name: "Search for Spells"}
    ]
  }

  render() {
    return (
      <>
      </>
    )
  }
}

export default App;
