export const PRODUCT_ADD = 'PRODUCT_ADD'
export const PRODUCT_ADD_ALL = 'PRODUCT_ADD_ALL'
export const PRODUCT_DELETE = 'PRODUCT_DELETE'
export const PRODUCT_UPDATE_STATE = 'PRODUCT_UPDATE_STATE'

export function productAdd(_id, title, description, price){
    return {
        type: PRODUCT_ADD, _id, title, description, price
    };
}

export function productAddAll(product_list){
    return {
        type: PRODUCT_ADD_ALL, product_list
    };
}

export function productDelete(_id){
    return {
        type: PRODUCT_DELETE, _id
    };
}

export function productUpateState(_id){
    return {
        type: PRODUCT_UPDATE_STATE, _id
    };
}