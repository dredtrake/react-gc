import React from 'react';
import { connect } from 'react-redux';
import '../scss/chord.scss';

const Chord = ({ positions }) => {
    return positions ? (
        <div className="chord">
            { positions.map(({ p }) => {
                const s = p.split('-');
                const c = s[1] !== '0' ? ' filled' : '';
                return <div key={p} className={`dot position-${p}${c}`} />;
            }) }
        </div>
    ) : null;
};

const mapStateToProps = state => ({
    positions: state && state.chord && state.chord.positions,
});

export default connect(
    mapStateToProps,
)(Chord);
