import {ADD, DELETE} from '../actions/actionTypes'

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
        // console.log(action.data)
            return {
                ...state,
                totalCost: state.totalCost + action.data.price.current.value,
                productCart: state.productCart.concat(action.data)
            }

        case DELETE:
            //[{productName- oranges, productPrice}, {productName- apples, productPrice}, {productName- banans, productPrice}]
            let updatedArray = state.productCart.filter(productObj => {
                return productObj.productName != action.productData.productName

            })

            return {
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.price),
                productCart: updatedArray
            }

        default:
            return state;
    }

}

export default templateReducer
