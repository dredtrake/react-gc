const chord = (state = [], action) => {
    const { id, name, positions } = action.payload;
    switch (action.type) {
        case 'INIT_CHORD':
        case 'CHANGE_CHORD':
            return {
                id,
                name,
                positions,
            };
        default:
           return state;
    }
}

export default chord;
