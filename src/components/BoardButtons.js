import Shape from './Shape';
import ShapeData from '../data/ShapeData';

// Container For Set Count, Find, And Settings On Left Side Of Board

const BoardButtons = ({ findSet, setCount, toggleSettings }) => {

    return (
        <div className='board-buttons fx-c'>
            {/* Set Count */}
            <div className='fx-c fx-1 ai-c'>
                <div className='text'>SETS</div>
                <div className='text'>{setCount}</div>
            </div>
            {/* Find - Magnifying Glass */}
            <div className='button fx fx-1 ai-c' onClick={findSet}>
                <Shape
                    color='#CD7F32'
                    fill='#linearGradient'
                    shape={ShapeData.magnifyingGlass}
                    strokeWidth='2'
                    viewBox='-5 45 110 110'
                />
            </div>
            {/* Settings - Cog */}
            <div className='button fx fx-1 ai-c' onClick={toggleSettings}>
                <Shape
                    color='#000000'
                    fill='#radialGradient'
                    shape={ShapeData.cog}
                    strokeWidth='0'
                    viewBox='-5 45 110 110'
                />
            </div>
        </div>
    );
};

export default BoardButtons;