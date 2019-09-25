export const changeChord = (chord) => {
    console.log('action > changeChord > ', chord);
    return {
        type: 'CHANGE_CHORD',
        name: chord.name,
        positions: chord.positions,
    };
};
