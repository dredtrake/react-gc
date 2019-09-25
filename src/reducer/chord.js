const chord = (state = [], action) => {
    console.log('reducer > chord> ', state, action);
    switch (action.type) {
        case 'INIT_CHORD':
        case 'CHANGE_CHORD':
            return [
              ...state,
            {
                id: action.id,
                name: action.name,
                positions: action.positions,
            }
        ];
        default:
           return state;
    }
}

export default chord;
