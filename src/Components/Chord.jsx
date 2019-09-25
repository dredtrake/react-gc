import React from 'react';
import '../scss/chord.scss';


const Chord = ({ positions }) => {
    return (
        <div className="chord">
            { positions.map(item => {
                const c = item.f ? ' filled' : '';
                return (<div key={item.p} className={`dot position-${item.p}${c}`} />);
            })}
        </div>
    );
};

export default Chord;
