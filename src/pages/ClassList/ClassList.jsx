import React, { Component } from 'react'

class ClassList extends Component {
  state = { 
    results: ['Paladin', 'Bard', 'Rogue']
   }
   
  render() { 
    return ( 
      <div>
        <h3>I'm the Class List</h3>
      </div>
     );
  }
}
 
export default ClassList;