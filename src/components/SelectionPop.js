import Pattern from './Pattern';
import Shape from './Shape';
import ShapeData from '../data/ShapeData';

// Pop Up In Settings To Select Shape or Color

const SelectionPop = (props) => {
    const { index, onClick, type, updatedUser } = props;
    const patternList = Pattern({});
    const mappedArr = (type === 'fills' ? patternList : Object.entries(ShapeData));

    // Invert Shape/Fill Color For Current Selection
    const setFilter = (data) => {
        if ((type === 'shapes' && data[0] === updatedUser.shapes[index]) ||
            (type === 'fills' && data === updatedUser.fills[index])) {
            return 'invert(1)';
        } else { return 'none' };
    };

    return (
        <div className='selection pop'>
            {/* Map Shape/Fill Array into 3 Column Overflow Grid */}
            {mappedArr.map((value, i) => (
                <div
                    key={i}
                    className='selection container fx w-100'
                    style={{ filter: setFilter(value) }}
                    onClick={() => {
                        onClick(
                            type === 'shapes' ?
                                value[0] :
                                value,
                            type,
                            index
                        );
                    }}
                >
                    {/* Display Shape w/out Fill Or Fill in Rect w/out Stroke */}
                    <Shape
                        color={updatedUser.colors[index]}
                        fill={type === 'fills' ?
                            value : 'none'}
                        shape={type === 'shapes' ?
                            value[1] : ShapeData['rectangle']}
                        strokeWidth={type === 'shapes' ?
                            updatedUser.strokeWidth : 0}
                    />
                    {/* Dim Container On Hover */}
                    <div
                        className='selection hover-container h-100 w-100'
                        style={{ filter: setFilter(value) }}
                    >
                        {/* Shows Name For Shapes, Only None For Patterns */}
                        <div className='selection hover-text white subtext'>
                            {type === 'shapes' ? value[0] : value === ('none') ? 'none' : ''}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectionPop;