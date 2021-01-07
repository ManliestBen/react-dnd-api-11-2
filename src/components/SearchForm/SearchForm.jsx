import React, { Component } from 'react'

class SearchForm extends Component {
  state = { 
    formData: {
      query: ''
    }
  }
  
  render() { 
    return ( 
      <div>
        <form>
          {/* input name attribute must match the one in state */}
          <input 
            type="text"
            name="query"
          />
          <button type='submit'>Search</button>
        </form>
      </div>
     );
  }
}
 
export default SearchForm;