import Card from "../components/Card";

// Pop Up Upon Selecting 3 Cards From The Board

const SetPop = (props) => {
  const {
    closeSetPop,
    failedCategories,
    hand,
    isSet,
    setCount,
    user
  } = props;

  return (
    <div className="purple set pop fx jc-se" onClick={closeSetPop}>
      {/* Conditional Title Based On isSet? */}
      {isSet ? <div className='green title text-above'>Set!</div>
        : <div className='red title text-above'>Not a Set</div>}
        <div className="fx-c h-100 ai-c jc-sb">
          {/* Left Side Selected Card Layout */}
          {hand.map((card, i) =>
            <Card key={i} card={card} className={'set-pop card'} user={user} />
          )}
        </div>
        <div className="fx-c jc-se">
          {/* Conditional Show Score Or Failed Categories */}
          {isSet ?
            <>
              <div className='subtitle bold'>Your Score:</div>
              <div className='display-number'>{setCount + 1}</div>
            </>
            :
            <>
              <div className='subtitle bold'>Categories Failed:</div>
              {failedCategories.map((category, i) =>
                <div className="text" key={i}>{category}</div>
              )}
            </>
          }
        </div>
      <div className='subtitle text-below'>Tap To Continue</div>
    </div>
  )
}

export default SetPop