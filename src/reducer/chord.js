const chord = (state = [], action) => {
    switch (action.type) {
        case 'INIT_CHORD':
        case 'CHANGE_CHORD':
            const { id, name, positions } = action.payload;
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
