export default function Basket(state=[],action) {
    if (action.type !== undefined ) {
        switch (action.type){
            case "BASKET_ADD" : {
                let x = state.some((id) => id === action.data);
                if (!x) {
                    return [...state, action.data];
                } else {
                    return  [...state];
                }

            }
            case "BASKET_REMOVE" : {
                return state.filter(item => item !== action.data);
            }

            case "BASKET_CLEAR" : {
                return []
            }

            default : {
                return state
            }
        }
    }
    return state
}
