import { useState } from 'react';
import Pattern from '../components/Pattern';
import Shape from '../components/Shape';
import ShapeData from '../data/ShapeData';

// Top Bar Component w/ Title, 'About', 'New Game'

//Select Random Fill For S, E, T In Title
const RandomPatterns = () => {
  const patterns = Pattern({});
  const randomPatterns = [];
  for (let i = 0; i < 3; i++) {
    const patternIndex = Math.floor(Math.random() * (patterns.length));
    randomPatterns.push(patterns[patternIndex]);
  };
  return randomPatterns;
};

const Nav = ({ newGame, toggleAbout }) => {
  const [randomPatterns, setRandomPatterns] = useState(RandomPatterns());

  return (
    <nav className='fx ai-c jc-sb'>
      <div className='fx h-100'>
        {/* S */}
        <Shape
          color='#008000'
          fill={randomPatterns[0]}
          shape={ShapeData.letterS}
          strokeWidth='10'
        />
        {/* E */}
        <Shape
          color='#800080'
          fill={randomPatterns[1]}
          shape={ShapeData.letterE}
          strokeWidth='10'
        />
        {/* T */}
        <Shape
          color='#FF0000'
          fill={randomPatterns[2]}
          shape={ShapeData.letterT}
          strokeWidth='10'
        />
      </div>
      {/* Buttons Container */}
      <div className='nav-buttons fx ai-c'>
        {/* About Button */}
        <div className='text button' onClick={toggleAbout}>ABOUT</div>
        {/* New Game Button */}
        <div
          className='text button'
          onClick={() => {
            newGame();
            setRandomPatterns(RandomPatterns());
          }}>
          NEW GAME
        </div>
      </div>
    </nav>
  );
};

export default Nav;