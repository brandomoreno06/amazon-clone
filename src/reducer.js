const initialState = {
    basket: [],
    user: null,
};


const getBasketSubtotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}


const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => {
                return basketItem.id === action.id;
            })

            if (index >=0) {
                console.log(index)
                newBasket.splice(index, 1)
            } else {
                return state;
            }
            
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}

export { initialState, getBasketSubtotal};
export default reducer;