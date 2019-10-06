export const changeChord = (chord) => {
    return {
        type: 'CHANGE_CHORD',
        name: chord.name,
        positions: chord.positions,
    };
};
