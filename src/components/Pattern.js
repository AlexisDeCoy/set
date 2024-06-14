import React from "react";

const patternList = [
    'none',
    '#stripedVertical',
    '#stripedHorizontal',
    '#linearGradient',
    '#radialGradient',
    '#checkersSmall',
    '#checkersMedium',
    '#checkersLarge',
    '#quadrants',
    '#halfHalf',
    'color'
];

const Pattern = ({ color = 'black', customPattern = { patternName: null, patternType: null } }) => {
    const { patternName, patternType } = customPattern;

    switch (patternType) {
        case 'stripedVertical':
            return (
                <pattern
                    id={patternName}
                    x='0'
                    y='0'
                    width='10'
                    height='200'
                    patternUnits='userSpaceOnUse'
                    fill={color}
                >
                    <rect x='0' y='0' width='2.5' height='200' />
                </pattern>
            );
        case 'stripedHorizontal':
            return (
                <pattern
                    id={patternName}
                    x='0'
                    y='0'
                    width='100'
                    height='10'
                    patternUnits='userSpaceOnUse'
                    fill={color}
                >
                    <rect x='0' width='200' height='2.5' y='0' />
                </pattern>
            )
        case 'linearGradient':
            return (
                <linearGradient
                    id={patternName}
                    gradientTransform="rotate(90)"
                >
                    <stop offset="15%" stopColor="white" />
                    <stop offset="85%" stopColor={color} />
                </linearGradient>
            );
        case 'radialGradient':
            return (
                <radialGradient id={patternName}>
                    <stop offset="10%" stopColor="white" />
                    <stop offset="95%" stopColor={color} />
                </radialGradient>
            );
        case 'checkersSmall':
            return (
                <pattern
                    id={patternName}
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                    fill={color}
                >
                    <rect x="0" width="5" height="5" y="0" />
                    <rect x="5" width="5" height="5" y="5" />
                </pattern>
            );
        case 'checkersMedium':
            return (
                <pattern
                    id={patternName}
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                    fill={color}
                >
                    <rect x="0" width="15" height="15" y="0" />
                    <rect x="15" width="15" height="15" y="15" />
                </pattern>
            );
        case 'checkersLarge':
            return (
                <pattern
                    id={patternName}
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                    patternUnits="userSpaceOnUse"
                    fill={color}
                >
                    <rect x="0" width="25" height="25" y="0" />
                    <rect x="25" width="25" height="25" y="25" />
                </pattern>
            );
        case 'quadrants':
            return (
                <pattern
                    id={patternName}
                    x="0"
                    y="0"
                    width="100"
                    height="200"
                    patternUnits="userSpaceOnUse"
                    fill={color}
                >
                    <rect x="0" width="50" height="100" y="0" />
                    <rect x="50" width="50" height="100" y="100" />
                </pattern>
            );
        case 'halfHalf':
            return (
                <pattern
                    id={patternName}
                    x="0"
                    y="0"
                    width="100"
                    height="200"
                    patternUnits="userSpaceOnUse"
                    fill={color}
                >
                    <rect x="0" width="50" height="200" y="0" />
                </pattern>
            );
        default: return patternList;
    };
};

export default Pattern;