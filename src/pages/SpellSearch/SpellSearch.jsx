import React, { Component } from "react";
import SearchForm from '../../components/SearchForm/SearchForm'

class SpellSearch extends Component {
  state = {
    spells: [],
  };

  render() {
    return (
      <>
        <h3>Such Spellz</h3>
        <SearchForm />
      </>
    );
  }
}

export default SpellSearch;