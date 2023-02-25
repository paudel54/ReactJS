export const initialStage = {
    basket: [],
};

// action is what you trying to do? Add: Remove what?
// Reducer is always listening for action to dispatch

// calcualte total with selector reduce fn takes 4 para , accumulator, current state, index and default value
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as its not in basket:`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;