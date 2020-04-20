import {ADD, DELETE} from './actionTypes'

export const addProduct = (productData) => {
    return {
        type: ADD,
        data: productData
    }
}

export const deleteProduct = (id) => {
    return{
        type: DELETE,
        id
    }
}