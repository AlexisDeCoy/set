import Pattern from './Pattern';

const setViewBox = (strokeWidth) => {
    return (
        `${Math.floor(-strokeWidth)} ` +
        `${Math.floor(-strokeWidth)} ` +
        `${Math.ceil(100 + strokeWidth * 2)} ` +
        `${Math.ceil(200 + strokeWidth * 2)}`
    );
};

const Shape = (props) => {
    const { color, shape, strokeWidth } = props;
    let { fill } = props;
    let customPattern = {};
    const viewBox = props.viewBox ? props.viewBox : setViewBox(strokeWidth);

    Shape.defaultProps = {
        color: 'black',
        fill: 'black',
        shape: 'M 0 0 L 100 0 L 100 200 L 0 200 Z',
        strokeWidth: 10
    };

    if (fill.includes('#')) {
        const patternType = fill.substring(1);
        customPattern = {
            patternName: `${patternType}${color}`,
            patternType: patternType
        }
        fill = `url(${fill}${color})`;
    }
    else if (fill.includes('color')) {
        fill = color;
    };

    return (
        <svg className='shape' viewBox={viewBox} xmlns='http://www.w3.org/2000/svg' >
            <defs>
                {customPattern ?
                    <Pattern color={color} customPattern={customPattern} />
                    : ''}
            </defs>

            <path
                d={shape}
                fill={fill}
                stroke={color}
                strokeLinejoin='round'
                strokeWidth={strokeWidth}
                fillRule='evenodd'
            />
        </svg>
    );
};

export default Shape