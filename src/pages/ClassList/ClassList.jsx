import React, { Component } from 'react'
import { getClassList } from '../../services/api-calls'

class ClassList extends Component {
  state = { 
    results: []
   }

    /*---------- Lifecycle Methods ----------*/

  async componentDidMount() {
    const classData = await getClassList()
    this.setState({ results: classData.results })
  }

  render() { 
    return ( 
      <div>
        <h3>Class List</h3>
        <div className="icon-container">
          {/* This is where we map over our results, representing each with a div containing an image and a name */}
          {this.state.results.map((classTitle) => (
            <div id="classDiv" key={classTitle.index}>
              <img 
								style={{ width: "100px", height: "100px" }}
								src={`/images/${classTitle.name}.svg`} 
								alt="class-logo"
							/>
              {classTitle.name}
            </div>
          ))}
        </div>
      </div>
     );
  }
}
 
export default ClassList;