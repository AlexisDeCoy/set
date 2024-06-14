// Pop Up At End Of Deck, Shows Set Count
// TBD
// Show Time
// Store Data In Persistent User

const GameOverPop = ({ newGame, setCount }) => {
    return (
        <div className='game-over pop fx-c jc-se' onClick={newGame}>
            <div className='white title text-above'>No More Sets!</div>
            <div className='purple subtitle'>SETS FOUND:</div>
            <div className='display-number'>{setCount}</div>
            <div className='subtitle text-below'>Tap To Start Again</div>
        </div>
    );
};

export default GameOverPop;