import React from 'react';
import String from './String';
import Cases from './Cases';
import Chord from './Chord';

const GuitarNeck = (props) => (
    <div className="guitar with-nut">
        <String size="1" />
        <String size="2" />
        <String size="3" />
        <String size="4" />
        <String size="5" />
        <String size="6" />
        <Cases by="4" />
        <Chord />
    </div>
);

export default GuitarNeck;
