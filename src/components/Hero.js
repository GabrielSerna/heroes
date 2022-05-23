import React from 'react';

const Hero = ({hero, toggleImportance}) => {
  const label = hero.important ? 'Remove important' : 'Add important'

  return( 
      <li>
        {hero.name}
        <button onClick={toggleImportance}>
          {label}
        </button>
      </li>
  );
};

export default Hero;