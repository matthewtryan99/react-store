import {ADD, DELETE, PLUS} from './actionTypes'

export const plusTemplate = (countValue) => {
    return{
        type: PLUS,
        count: countValue
    }
}

export const addTemplate = (obj) => {
    return {
        type: ADD,
        data: obj
    }
}

export const deleteTemplate = (id) => {
    return{
        type: DELETE,
        id
    }
}