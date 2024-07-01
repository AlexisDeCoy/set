const DisclaimersPop = ({ onClick }) => {
    return (
        <div
            className="disclaimers pop fx-c jc-se"
            onClick={onClick}
        >
            {/* Disclaimers */}
            <div className="red title bold">Disclaimer:</div>
            <div>
                This React project is based on The <span className="bold">Set</span>
                &reg; Card Game, which is owned by Set Enterprises, Inc., a part of
                PlayMonster LLC.
            </div>
            <div>
                This project is intended as part of a portfolio for
                personal, non-commercial use, and exists solely as a
                demonstration of my development skills.
            </div>
            <div>
                If you enjoyed this project, please consider supporting
                the creators of the <span className="bold">Set</span>&reg; 
                 Card Game, which can be
                found &nbsp;
                <a
                    className='purple bold'
                    href="https://www.playmonster.com/brands/set/"
                    onClick={(e) => e.stopPropagation()}
                >
                    here.
                </a>
            </div>
            <div>
                My other projects and contact information can be
                found &nbsp;
                <a
                    className="purple bold"
                    href="https://alexisdecicco.com"
                    onClick={(e) => e.stopPropagation()}
                >
                    here.
                </a>
            </div>
            <div>
                Thanks for playing!
            </div>
            <div className="white subtitle text-below">
                Tap To View Instructions
            </div>
        </div>
    )
};

export default DisclaimersPop;
