export const changeChord = (id, chord) => {
    console.log(id, chord);
    return {
        type: 'CHANGE_CHORD',
        payload: {
            id,
            name: chord.name,
            positions: chord.positions,
        },
    };
};
