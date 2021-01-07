import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getMonsterList } from '../../services/api-calls'

class MonsterList extends Component {
  state = { 
    monsterList: []
  }

  async componentDidMount() {
    const monsterList = await getMonsterList()
    this.setState({ monsterList: monsterList.results })
  }

  render() { 
    return ( 
      <>
        <h3>Monster List</h3>
        {this.state.monsterList.map((monster) => (
            <div
              key={monster.index}
            >
              <Link
                  to={{
                  pathname: '/monster',
                  state: { monster }
                }}
              >
                {monster.name}
              </Link><br></br>
            </div>
        ))}
      </>
     );
  }
}
 
export default MonsterList;