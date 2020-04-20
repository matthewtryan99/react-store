import {ADD, DELETE, CLEAR} from '../actions/actionTypes'

let templateReducer = (state, action) => {

    //check if state exists

    if (state === undefined) {
        state = {
            totalCost: 0,
            productCart: []
        }
    }

    switch (action.type) {
        case ADD:
            return {
                ...state,
                totalCost: state.totalCost + action.data.price.value,
                productCart: state.productCart.concat(action.data)
            }

        case DELETE:
            //[{productName- oranges, productPrice}, {productName- apples, productPrice}, {productName- banans, productPrice}]
            let updatedArray = state.productCart.filter(productObj => {
                return (productObj.code !== action.id.code)

            })
            return {
                ...state,
                totalCost: state.totalCost - action.id.price.value,
                productCart: updatedArray
            }
        case CLEAR:
            return{
                ...state,
                totalCost: 0,
                productCart: []
            }
        default:
            return state;
    }

}

export default templateReducer
