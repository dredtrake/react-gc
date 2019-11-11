const chord = (state = [], action) => {
    const { payload: { id, name, positions } = {} } = action;
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
