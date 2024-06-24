import { PRODUCT_ADD, PRODUCT_ADD_ALL, PRODUCT_DELETE, PRODUCT_UPDATE_STATE } from "./actions";
import { combineReducers } from "redux";
function product(state = [], action){
    switch(action.type){
        case PRODUCT_ADD:
            return[
                ...state, 
                {
                    _id: action._id, 
                    title: action.title,
                    description: action.description,
                    price: action.price,
                    available: false
                }
            ]

        case PRODUCT_ADD_ALL:
            return[
                ...action.product_list
            ]

        case PRODUCT_DELETE:
            return state.filter(function(product){
                return product._id  !== action._id;
            })

        case PRODUCT_UPDATE_STATE:
            return state.map(function(product){
                if(product._id === action._id){
                    return {...product, available: !product.available}
                }
                return product
            })

        default:
            return state
    }
}

export default combineReducers({
    products: product
});