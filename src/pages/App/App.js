import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import ClassList from '../ClassList/ClassList'
import ClassDetails from '../ClassDetails/ClassDetails'
import MonsterList from '../MonsterList/MonsterList'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from '../SpellSearch/SpellSearch'

class App extends Component {
  state = {
    navItems: [
      {url: "/classlist", name: "Class List"}, 
      {url: "/monsterlist", name: "Scary Monsters"}, 
      {url: "/spellsearch", name: "Search for Spells"}    ]
  }

  
  render() {
    return (
      <>
        <NavBar navItems={this.state.navItems}/>
        <Route 
          exact path='/classlist'
          render={() => <ClassList />}
        />
        <Route 
          exact path='/class'
          render={( {location} ) => 
            <ClassDetails 
              location={location}
            />  
          }
        />
        <Route 
          exact path='/monsterlist'
          render={() => 
            <MonsterList />
          }
        />
        <Route 
          exact path='/monster'
          render={( {location} ) => 
            <MonsterDetails 
              location={location}
            />
          }
        />
        <Route
          exact path='/spellsearch'
          render={() => 
            <SpellSearch />
          }
        />
      </>
    )
  }
}

export default App;
