import { useState } from "react";
import Shape from "./Shape";
import ShapeData from "../data/ShapeData";

const checkSet = (cards) => {
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
  return failedCategories;
};

const AboutSetPop = ({ closePop, hand, setCount }) => {
  const [failedCategories] = useState(checkSet(hand));
  const [isSet] = useState(failedCategories.length > 0 ? false : true);


  // console.log(isSet);
  // closePop,
  // failedCategories,
  // hand,
  // isSet,
  // setCount,



  return (
    <div className="purple set pop fx jc-se" onClick={() => { closePop(isSet) }}>
      {/* Conditional Title Based On isSet */}
      {isSet ? <div className='green title text-above ta-c'>Set!</div>
        : <div className='red title text-above ta-c'>Not a Set</div>}
      <div className="fx-c h-100 ai-c jc-sb">
        {/* Left Side Selected Card Layout */}
        {hand.map((card, i) =>
          <div key={i} className='set-pop card'>
            {[...Array(card.quantity)].map((q, j) => (
              <Shape
                key={j}
                color={card.color}
                fill={card.fill}
                shape={ShapeData[card.shape]}
              />
            ))}
          </div>
        )}
      </div>
      <div className="fx-c jc-se">
        {/* Conditional Show Score Or Failed Categories */}
        {isSet ?
          <>
            <div className='subtitle bold ta-c'>Your Score:</div>
            <div className='display-number ta-c'>{setCount + 1}</div>
          </>
          :
          <>
            <div className='subtitle bold ta-c'>Categories Failed:</div>
            {failedCategories.map((category, i) =>
              <div className="small-text ta-c" key={i}>{category}</div>
            )}
          </>
        }
      </div>
      <div className='subtitle text-below'>Tap To Continue</div>
    </div>
  )
};

export default AboutSetPop;