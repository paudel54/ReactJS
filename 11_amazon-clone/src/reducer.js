export const initialStage = {
    basket: [],
};

// action is what you trying to do? Add: Remove what?
// Reducer is always listening for action to dispatch
const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
}

export default reducer;