const Deck = () => {
    const deck = [
        {
            color: 0,
            fill: 0,
            quantity: 0,
            shape: 0
        },
        {
            color: 0,
            fill: 0,
            quantity: 0,
            shape: 1
        },
        {
            color: 0,
            fill: 0,
            quantity: 0,
            shape: 2
        },
        {
            color: 0,
            fill: 0,
            quantity: 1,
            shape: 0
        },
        {
            color: 0,
            fill: 0,
            quantity: 1,
            shape: 1
        },
        {
            color: 0,
            fill: 0,
            quantity: 1,
            shape: 2
        },
        {
            color: 0,
            fill: 0,
            quantity: 2,
            shape: 0
        },
        {
            color: 0,
            fill: 0,
            quantity: 2,
            shape: 1
        },
        {
            color: 0,
            fill: 0,
            quantity: 2,
            shape: 2
        },
        {
            color: 0,
            fill: 1,
            quantity: 0,
            shape: 0
        },
        {
            color: 0,
            fill: 1,
            quantity: 0,
            shape: 1
        },
        {
            color: 0,
            fill: 1,
            quantity: 0,
            shape: 2
        },
        {
            color: 0,
            fill: 1,
            quantity: 1,
            shape: 0
        },
        {
            color: 0,
            fill: 1,
            quantity: 1,
            shape: 1
        },
        {
            color: 0,
            fill: 1,
            quantity: 1,
            shape: 2
        },
        {
            color: 0,
            fill: 1,
            quantity: 2,
            shape: 0
        },
        {
            color: 0,
            fill: 1,
            quantity: 2,
            shape: 1
        },
        {
            color: 0,
            fill: 1,
            quantity: 2,
            shape: 2
        },
        {
            color: 0,
            fill: 2,
            quantity: 0,
            shape: 0
        },
        {
            color: 0,
            fill: 2,
            quantity: 0,
            shape: 1
        },
        {
            color: 0,
            fill: 2,
            quantity: 0,
            shape: 2
        },
        {
            color: 0,
            fill: 2,
            quantity: 1,
            shape: 0
        },
        {
            color: 0,
            fill: 2,
            quantity: 1,
            shape: 1
        },
        {
            color: 0,
            fill: 2,
            quantity: 1,
            shape: 2
        },
        {
            color: 0,
            fill: 2,
            quantity: 2,
            shape: 0
        },
        {
            color: 0,
            fill: 2,
            quantity: 2,
            shape: 1
        },
        {
            color: 0,
            fill: 2,
            quantity: 2,
            shape: 2
        },
        {
            color: 1,
            fill: 0,
            quantity: 0,
            shape: 0
        },
        {
            color: 1,
            fill: 0,
            quantity: 0,
            shape: 1
        },
        {
            color: 1,
            fill: 0,
            quantity: 0,
            shape: 2
        },
        {
            color: 1,
            fill: 0,
            quantity: 1,
            shape: 0
        },
        {
            color: 1,
            fill: 0,
            quantity: 1,
            shape: 1
        },
        {
            color: 1,
            fill: 0,
            quantity: 1,
            shape: 2
        },
        {
            color: 1,
            fill: 0,
            quantity: 2,
            shape: 0
        },
        {
            color: 1,
            fill: 0,
            quantity: 2,
            shape: 1
        },
        {
            color: 1,
            fill: 0,
            quantity: 2,
            shape: 2
        },
        {
            color: 1,
            fill: 1,
            quantity: 0,
            shape: 0
        },
        {
            color: 1,
            fill: 1,
            quantity: 0,
            shape: 1
        },
        {
            color: 1,
            fill: 1,
            quantity: 0,
            shape: 2
        },
        {
            color: 1,
            fill: 1,
            quantity: 1,
            shape: 0
        },
        {
            color: 1,
            fill: 1,
            quantity: 1,
            shape: 1
        },
        {
            color: 1,
            fill: 1,
            quantity: 1,
            shape: 2
        },
        {
            color: 1,
            fill: 1,
            quantity: 2,
            shape: 0
        },
        {
            color: 1,
            fill: 1,
            quantity: 2,
            shape: 1
        },
        {
            color: 1,
            fill: 1,
            quantity: 2,
            shape: 2
        },
        {
            color: 1,
            fill: 2,
            quantity: 0,
            shape: 0
        },
        {
            color: 1,
            fill: 2,
            quantity: 0,
            shape: 1
        },
        {
            color: 1,
            fill: 2,
            quantity: 0,
            shape: 2
        },
        {
            color: 1,
            fill: 2,
            quantity: 1,
            shape: 0
        },
        {
            color: 1,
            fill: 2,
            quantity: 1,
            shape: 1
        },
        {
            color: 1,
            fill: 2,
            quantity: 1,
            shape: 2
        },
        {
            color: 1,
            fill: 2,
            quantity: 2,
            shape: 0
        },
        {
            color: 1,
            fill: 2,
            quantity: 2,
            shape: 1
        },
        {
            color: 1,
            fill: 2,
            quantity: 2,
            shape: 2
        },
        {
            color: 2,
            fill: 0,
            quantity: 0,
            shape: 0
        },
        {
            color: 2,
            fill: 0,
            quantity: 0,
            shape: 1
        },
        {
            color: 2,
            fill: 0,
            quantity: 0,
            shape: 2
        },
        {
            color: 2,
            fill: 0,
            quantity: 1,
            shape: 0
        },
        {
            color: 2,
            fill: 0,
            quantity: 1,
            shape: 1
        },
        {
            color: 2,
            fill: 0,
            quantity: 1,
            shape: 2
        },
        {
            color: 2,
            fill: 0,
            quantity: 2,
            shape: 0
        },
        {
            color: 2,
            fill: 0,
            quantity: 2,
            shape: 1
        },
        {
            color: 2,
            fill: 0,
            quantity: 2,
            shape: 2
        },
        {
            color: 2,
            fill: 1,
            quantity: 0,
            shape: 0
        },
        {
            color: 2,
            fill: 1,
            quantity: 0,
            shape: 1
        },
        {
            color: 2,
            fill: 1,
            quantity: 0,
            shape: 2
        },
        {
            color: 2,
            fill: 1,
            quantity: 1,
            shape: 0
        },
        {
            color: 2,
            fill: 1,
            quantity: 1,
            shape: 1
        },
        {
            color: 2,
            fill: 1,
            quantity: 1,
            shape: 2
        },
        {
            color: 2,
            fill: 1,
            quantity: 2,
            shape: 0
        },
        {
            color: 2,
            fill: 1,
            quantity: 2,
            shape: 1
        },
        {
            color: 2,
            fill: 1,
            quantity: 2,
            shape: 2
        },
        {
            color: 2,
            fill: 2,
            quantity: 0,
            shape: 0
        },
        {
            color: 2,
            fill: 2,
            quantity: 0,
            shape: 1
        },
        {
            color: 2,
            fill: 2,
            quantity: 0,
            shape: 2
        },
        {
            color: 2,
            fill: 2,
            quantity: 1,
            shape: 0
        },
        {
            color: 2,
            fill: 2,
            quantity: 1,
            shape: 1
        },
        {
            color: 2,
            fill: 2,
            quantity: 1,
            shape: 2
        },
        {
            color: 2,
            fill: 2,
            quantity: 2,
            shape: 0
        },
        {
            color: 2,
            fill: 2,
            quantity: 2,
            shape: 1
        },
        {
            color: 2,
            fill: 2,
            quantity: 2,
            shape: 2
        },
    ];

    return deck;
};

export default Deck;