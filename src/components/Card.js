import Shape from './Shape';
import ShapeData from '../data/ShapeData';

const Card = (props) => {
    const { card, className, onClick, user } = props;
    const quantityArr = [];
    const color = user.colors[card.color];
    const fill = user.fills[card.fill];
    const shape = ShapeData[user.shapes[card.shape]];

    for (let i = 0; i <= card.quantity; i++) {
        quantityArr.push(
            <Shape
                key={i}
                color={color}
                fill={fill}
                shape={shape}
                strokeWidth={user.strokeWidth}
            />
        );
    };

    return (
        <div className={className} onClick={onClick}>
            {quantityArr.map((shape) => shape)}
        </div>
    );
};

export default Card;