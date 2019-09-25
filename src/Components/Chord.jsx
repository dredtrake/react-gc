import React from 'react';
import { connect } from 'react-redux';
import '../scss/chord.scss';

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

// const mapStateToProps = ({ chord }) => {
//     console.log(chord);
//     return {
//         positions: (chord && chord.positions) || defaultProps.chord.positions,
//     };
// };

// export default connect(
    // mapStateToProps,
// )(Chord);
export default Chord;
