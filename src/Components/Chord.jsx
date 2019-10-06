import React from 'react';
import { connect } from 'react-redux';
import '../scss/chord.scss';

const Chord = ({ positions }) => {
    return positions ? (
        <div className="chord">
            { positions.map(item => {
                const c = item.f ? ' filled' : '';
                return (<div key={item.p} className={`dot position-${item.p}${c}`} />);
            }) }
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    positions: (state && state.chord && state.chord.positions),
});

export default connect(
    mapStateToProps,
)(Chord);
