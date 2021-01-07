import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getMonsterList } from '../../services/api-calls'

class MonsterList extends Component {
  state = { 
    monsterList: []
   }
  render() { 
    return ( 
      <>
        <h3>Monster List</h3>
      </>
     );
  }
}
 
export default MonsterList;