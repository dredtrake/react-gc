import React from 'react';
import './chord.scss';

const defaultProps = {
    chord: {
        name: 'Am',
        positions: [
            { p: '1-0', f: false },
            { p: '2-1', f: true },
            { p: '3-2', f: true },
            { p: '4-2', f: true },
            { p: '5-0', f: false },
        ],
    },
};

const Chord = () => {
    const { chord: { positions } } = defaultProps;
    return (
        <div className="chord">
            { positions.map(item => {
                const c = item.f ? ' filled' : '';
                return (<div className={`dot position-${item.p}${c}`} />);
            })}
        </div>
    );
};

export default Chord;
