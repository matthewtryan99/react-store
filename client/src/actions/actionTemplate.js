import {ADD, DELETE} from './actionTypes'

export const addProduct = (obj) => {
    return {
        type: ADD,
        data: obj
    }
}

export const deleteProduct = (id) => {
    return{
        type: DELETE,
        id
    }
}