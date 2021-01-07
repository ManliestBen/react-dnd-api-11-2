import React, { Component } from "react";
import SearchForm from '../../components/SearchForm/SearchForm'
import { spellSearch } from '../../services/api-calls'
import SpellCard from '../../components/SpellCard/SpellCard'

class SpellSearch extends Component {
  state = {
    spells: [],
  };

  handleSpellSearch = async (formData) => {
    const spells = await spellSearch(formData)
    console.log(spells.results)
    this.setState({ spells: spells.results })
  }

  render() {
    return (
      <>
        <h3>Such Spellz</h3>
        <SearchForm 
          handleSpellSearch={this.handleSpellSearch}
        />
        {this.state.spells.length ? 
        <>
          {this.state.spells.map(spell =>
            <SpellCard 
              spell={spell}
              key={spell.index}
            />
          )}
        </>
        :
        <h3>Please search for a spell!</h3>
        }
      </>
    );
  }
}

export default SpellSearch;