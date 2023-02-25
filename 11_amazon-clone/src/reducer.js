export const initialStage = {
    basket: [],
};

// action is what you trying to do? Add: Remove what?
// Reducer is always listening for action to dispatch
// calcualte total
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

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