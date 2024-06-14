import { useState } from "react";
import AboutSetPop from "../components/AboutSetPop";
import MoreExamples from "../components/MoreExamples";
import Shape from "../components/Shape";
import ShapeData from "../data/ShapeData";
import DisclaimersPop from "../components/DisclaimersPop";

const sample = () => {
    return [
        { color: '#008000', fill: 'none', quantity: 1, shape: 'oval' },
        { color: '#800080', fill: '#stripedHorizontal', quantity: 3, shape: 'squiggle' },
        { color: '#800080', fill: 'none', quantity: 2, shape: 'oval' },
        { color: '#FF0000', fill: 'color', quantity: 2, shape: 'diamond' },
        { color: '#008000', fill: 'color', quantity: 3, shape: 'diamond' },
        { color: '#FF0000', fill: '#stripedHorizontal', quantity: 1, shape: 'squiggle' },
    ];
};

const AboutPop = ({ toggleAbout }) => {
    const [aboutSetPop, setAboutSetPop] = useState(false);
    const [disclaimers, setDisclaimers] = useState(true);
    const [hand, setHand] = useState([]);
    const [sampleDeck] = useState(sample());
    const [setCount, setSetCount] = useState(0);

    // Practice Board Hand Change
    const handleChangeOfHand = (card) => {
        const newHand = hand;
        const inHand = newHand.indexOf(card);
        if (inHand !== -1) {
            newHand.splice(inHand, 1);
        } else {
            newHand.push(card);
        };
        setHand([...newHand]);
        if (newHand.length === 3) {
            setAboutSetPop(true);
        };
    };

    // Practice Set Pop Close & State Reset
    const closePop = (isSet = false) => {
        isSet && setSetCount(setCount + 1);
        setAboutSetPop(false);
        setHand([]);
    }

    return (
        <div className="about pop">
            {/* -- Disclaimers -- */}
            {disclaimers ? <DisclaimersPop onClick={() => {
                setDisclaimers(false)
            }} /> : ''}
            {/* -- Scrolling Container -- */}
            <div className="scrollbox fx-c w-100 h-100">
                <button className='settings close white title' onClick={toggleAbout}>X</button>
                {/* -- How To Play -- */}
                <div className="green subtitle">How To Play</div>
                <div className="text">
                    Set is a game about identifying patterns and finding sets.
                    Each set is comprised of 3 cards, where each card is defined by 4
                    categories:
                </div>
                <div className="categories">
                    <div className="purple small-text ta-c">Color:
                        <span className="green"> Green, </span>
                        Purple,
                        <span className="red"> Red</span>
                        *</div>
                    <div className="purple small-text ta-c">Fill: Empty, Striped, Solid*</div>
                    <div className="purple small-text ta-c">Shape: Diamond, Oval, Squiggle*</div>
                    <div className="purple small-text ta-c">Quantity: 1, 2, 3</div>
                </div>
                <div className="purple subtext light ta-c">*Colors, Fills, And Shapes Can Be Changed In Settings</div>
                <hr />
                {/* -- What Is A Set -- */}
                <div className="green subtitle">What Is A Set?</div>
                <div className="text">
                    To qualify as a set, the cards must be all the same or all
                    different for each of the categories independently. For example,
                </div>
                <div className="example">
                    <Shape color='#FF0000' fill='color' shape={ShapeData.diamond} />
                    <Shape color='#008000' fill='color' shape={ShapeData.squiggle} />
                    <Shape color='#800080' fill='color' shape={ShapeData.oval} />
                </div>
                <div className="text">
                    is a set because the cards all share the same value
                    for quantity (1) and fill (solid), but all differ in
                    shape (diamond, squiggle, and oval) and color (
                    <span className="red">red</span>,
                    <span className="green"> green</span>,
                    <span className="purple"> purple</span>).
                </div>
                <div className="red small-text ta-c">However,</div>
                <div className="example">
                    <Shape color='#FF0000' fill='none' shape={ShapeData.diamond} />
                    <Shape color='#008000' fill='none' shape={ShapeData.squiggle} />
                    <div className="fx">
                        <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                        <Shape color='#800080' fill='none' shape={ShapeData.diamond} />
                    </div>
                </div>
                <div className="red small-text ta-c">And</div>
                <div className="example fx jc-se">
                    <Shape color='#008000' fill='#stripedHorizontal' shape={ShapeData.diamond} />
                    <Shape color='#008000' fill='color' shape={ShapeData.squiggle} />
                    <Shape color='#800080' fill='color' shape={ShapeData.oval} />
                </div>
                <div className="red small-text ta-c">are not sets.</div>
                <div className="text">
                    The first because it has two of same shape and quantity (diamond, 1) and one
                    that is different (squiggle, 2).
                </div>
                <div className="text">
                    The second because it has two of the same
                    color and fill (<span className="green">green</span>, solid) and one
                    that's different (<span className="purple">purple</span>, horizontal stripes).
                </div>
                <div className="purple subtext light ta-c">More Examples At The Bottom</div>
                <hr />
                {/* -- Playing The Game -- */}
                <div className="green subtitle">Playing The Game</div>
                <div className="text">
                    The game begins with twelve cards, and as sets are found,
                    cards from the deck replace those that are part of the selected
                    set.
                </div>
                <div className="text">
                    To select a set, click on three different cards, which will be
                    highlighted with a <span className="green">green</span> border. If you change your mind,
                    you can unselect them by clicking again.
                </div>
                <div className="purple subtitle">Try It Out!</div>
                {/* -- Practice Board -- */}
                <div className="sample-grid">
                    {sampleDeck.map((card, i) =>
                        <div
                            key={i}
                            className={hand && hand.includes(card) ? 'selected card' : 'card'}
                            onClick={() => { handleChangeOfHand(card) }
                            }>
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
                    {aboutSetPop ?
                        <>
                            <div className='about-blur h-100 w-100' />
                            <AboutSetPop hand={hand} closePop={closePop} setCount={setCount} />
                        </>
                        : ''}
                </div>
                <div className="text">
                    When you've chosen three cards, a prompt will appear, either confirming your
                    set and updating the game board, or informing you of which categories failed.
                </div>

                <div className="text">Once the deck is depleted and no sets remain, the game is over.</div>

                {/* Button Explanations */}
                <hr />
                <div className="green subtitle">What About The Buttons?</div>
                <div className="purple small-text">Find Set</div>
                <div className="about-button fx jc-se">
                    <Shape
                        color='#CD7F32'
                        fill='#linearGradient'
                        shape={ShapeData.magnifyingGlass}
                        strokeWidth='2'
                        viewBox='-5 45 110 110'
                    />
                    <div>
                        <div className="text">
                            If you're having trouble finding a set, click the magnifying glass.
                            If a set exists, each card will get a <span className="purple"> purple </span>
                            border. If there are no sets on the board, 3 additional cards
                            will be added. While the board has more than 12 cards,
                            finding a set will only remove those cards until the board is back to 12.
                        </div>
                    </div>
                </div>
                <div className="purple small-text">Settings</div>
                <div className="about-button fx jc-se">
                    <Shape
                        color='#000000'
                        fill='#radialGradient'
                        shape={ShapeData.cog}
                        strokeWidth='0'
                        viewBox='-5 45 110 110'
                    />
                    <div>
                        <div className="text">
                            If you want to customize your cards, click the settings cog.
                            In this menu, you can change colors, fills, and shapes for each
                            of the three card types. Upon closing the window, the deck will
                            be updated, but your current game progress will remain.
                        </div>
                    </div>
                </div>
                <hr />
                {/* -- More Examples -- */}
                <div className="green subtitle">More Example Sets</div>
                <MoreExamples />
                <hr />
                <div className="purple subtitle ta-c">Have Fun!</div>
            </div>
        </div>
    )
};

export default AboutPop;