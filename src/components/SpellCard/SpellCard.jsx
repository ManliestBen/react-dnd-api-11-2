import React from 'react'
import { Link } from 'react-router-dom'

const SpellCard = (props) => {
  return ( 
    <>
      <Link
        to={{
          pathname: `/spell/${props.spell.index}`
        }}
      >
        {props.spell.name}
      </Link>
      <br/>
    </>
  );
}
 
export default SpellCard;