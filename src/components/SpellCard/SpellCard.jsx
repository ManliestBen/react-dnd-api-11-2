import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const SpellCard = (props) => {
  return ( 
    <>
      <Link>
        {props.spell.name}
      </Link>
      <br/>
    </>
  );
}
 
export default SpellCard;