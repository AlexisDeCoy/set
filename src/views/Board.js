import { useCallback, useEffect, useState } from "react";
import BoardButtons from "../components/BoardButtons";
import Card from "../components/Card";
import GameOverPop from "./GameOverPop";
import SetPop from "./SetPop";

// Card Layout

// TBD
// Manage state variables better... maybe an Object?
//    And/Or Function to reset all to default
// Isolate states relative to the player (sets, hand, etc.)
//    For multiplayer and tracking over multiple games
// toggleBlur being sus (working for now) - Fixed ?
// Edge Case: Last 12 cards have no set

const Board = (props) => {
  const { deck, newGame, toggleBlur, toggleSettings, user } = props;
  const [boardLayout, setBoardLayout] = useState('board');
  const [deckIndex, setDeckIndex] = useState(12);
  const [displayArr, setDisplayArr] = useState([...deck.slice(0, 12)]);
  const [failedCategories, setFailedCategories] = useState([]);
  const [found, setFound] = useState([]);
  const [gameOverPop, setGameOverPop] = useState(false);
  const [hand, setHand] = useState([]);
  const [isSet, setIsSet] = useState(false);
  const [setCount, setSetCount] = useState(0);
  const [setPop, setSetPop] = useState(false);

  // Shorthand For Resetting Multiple States
  const resetStates = useCallback(() => {
    setFailedCategories([]);
    setFound([]);
    setGameOverPop(false);
    setHand([]);
    setIsSet(false);
    toggleBlur(false);
    setSetPop(false);
  }, [toggleBlur]);

  //Set Deck Index & Display Arr, used for New Game
  useEffect(() => {
    setDeckIndex(12);
    setDisplayArr([...deck.slice(0, 12)]);
    setSetCount(0);
    resetStates();
  }, [deck, resetStates]);

  // Update Layout Upon Change In DisplayArr Length
  useEffect(() => {
    const newLayout = () => {
      switch (displayArr.length) {
        case 3: return 'board xs';
        case 6: return 'board xs';
        case 9: return 'board small';
        case 12: return 'board';
        case 15: return 'board large';
        case 18: return 'board xl';
        default: return 'board';
      };
    };
    setBoardLayout(newLayout());
  }, [displayArr.length]);

  // Update Selected Cards, Remove If Already Held
  // On Three, Trigger Set Pop
  const handleChangeOfHand = (card, displayIndex) => {
    const newHand = hand;
    const inHand = newHand.indexOf(card);
    if (inHand !== -1) {
      newHand.splice(inHand, 1);
    } else {
      card.displayIndex = displayIndex;
      newHand.push(card);
    };
    setHand([...newHand]);
    if (newHand.length === 3) {
      setIsSet(checkSet(newHand));
      setSetPop(true);
      toggleBlur(true);
    };
  };

  // Sorts Through Cards In DisplayArr or Provided Array
  // Calls Check Set Per Option
  const findSet = (e = null, hidden = false, cardArr = displayArr) => {
    for (let i = 0; i < cardArr.length - 2; i++) {
      for (let j = i + 1; j < cardArr.length - 1; j++) {
        for (let k = j + 1; k < cardArr.length; k++) {
          const cards = [cardArr[i], cardArr[j], cardArr[k]];
          if (checkSet(cards)) {
            !hidden && setFound([i, j, k]);
            return true;
          };
        };
      };
    };

    // If No Set And Still Cards To Add, Add To Board
    if (deckIndex <= 78) {
      const newDisplayArr = [...displayArr];
      for (let i = deckIndex; i < deckIndex + 3; i++) {
        newDisplayArr.push(deck[i]);
      };
      setDeckIndex(deckIndex + 3);
      setDisplayArr(newDisplayArr);
    }
    return false;
  };

  // Checks Whether Cards In Hand Are A Set
  // Determined Based On All Similar Or All Different Per Category
  const checkSet = useCallback((cards) => {
    const categories = ['color', 'fill', 'quantity', 'shape'];
    const failedCategories = [];
    for (const category of categories) {
      if
        (!((
          // Checks All Equal
          cards[0][category] === cards[1][category] &&
          cards[1][category] === cards[2][category]
        ) || (
            // Checks All Different
            cards[0][category] !== cards[1][category] &&
            cards[0][category] !== cards[2][category] &&
            cards[1][category] !== cards[2][category]
          ))) {
        // If Not All Same/Different, Add Category Failed To Arr
        failedCategories.push(category)
      };
    };

    if (failedCategories.length !== 0) {
      setFailedCategories(failedCategories);
      return false;
    };

    return true;
  }, []);

  // Closes Set Pop, Conditionally Adds Or Filters Out Cards...
  // Based On isSet, deckIndex, And Calls Game Over If Applicable
  const closeSetPop = () => {
    let newDisplayArr = [...displayArr];
    let newDeckIndex = deckIndex;
    if (isSet) {
      // If There Are Still Cards To Add From Deck...
      // And A Standard 12 Card Board
      if (newDeckIndex < 81 && newDisplayArr.length === 12) {
        for (let i = 0; i < 3; i++) {
          newDisplayArr[hand[i].displayIndex] = deck[newDeckIndex];
          newDeckIndex++;
        };
      } else {
        // Sort Through Array, Set Cards In Hand = ''
        // If deckIndex is 81 (End Of Deck), Or displayArr length > 12
        for (let i = 0; i < hand.length; i++) {
          newDisplayArr[hand[i].displayIndex] = '';
        };
        newDisplayArr = newDisplayArr.filter((card) => card !== '');
      };
      setSetCount(setCount + 1);
      setDeckIndex(newDeckIndex);
      setDisplayArr(newDisplayArr);
    };

    resetStates();

    // If At End Of Deck And No Sets Remain Trigger Game Over Pop
    if (newDeckIndex >= 81 && !findSet(null, true, newDisplayArr)) {
      toggleBlur(true);
      setGameOverPop(true);
    };
  };

  return (
    <div className="board-container fx">
      <BoardButtons
        findSet={findSet}
        setCount={setCount}
        toggleSettings={toggleSettings}
      />
      <div className={boardLayout}>
        {/* Map Cards In DisplayArr */}
        {displayArr.map((card, i) =>
          <Card
            key={i}
            card={card}
            className={hand && hand.includes(card) ? 'selected card' :
              found && found.includes(i) ? 'highlighted card' : 'card'}
            hand={hand}
            user={user}
            onClick={() => { handleChangeOfHand(card, i); }}
          />
        )}
        {/* Set Pop Up Conditional Display */}
        {setPop &&
          <SetPop
            closeSetPop={closeSetPop}
            failedCategories={failedCategories}
            hand={hand}
            isSet={isSet}
            setCount={setCount}
            user={user}
          />
        }
        {/* Game Over Pop Up Conditional Display */}
        {gameOverPop && <GameOverPop newGame={newGame} setCount={setCount} />}
      </div>
    </div>
  );
};

export default Board;
