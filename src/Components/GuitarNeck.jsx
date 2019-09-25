import React from 'react';
import { connect } from 'react-redux';
import String from './String';
import Cases from './Cases';
import Chord from './Chord';
import { changeChord } from '../actions';
import chordsDictionary from '../constants';

const GuitarNeck = ({ chord: { name, positions } }, ...props) => (
    <div className="container">
        <div className="guitar with-nut">
            <String size="1" />
            <String size="2" />
            <String size="3" />
            <String size="4" />
            <String size="5" />
            <String size="6" />
            <Cases by="4" />
            <Chord positions={positions}/>
        </div>
        <h2>{name}</h2>
        {chordsDictionary.map(item => (<button>{item.name}</button>))}
    </div>
);
console.log(chordsDictionary);
const mapStateToProps = state => ({
    chord: changeChord(chordsDictionary[0]),
});

export default connect(
    mapStateToProps,
)(GuitarNeck);
