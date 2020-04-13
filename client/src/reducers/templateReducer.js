import {ADD, DELETE, PLUS} from '../actions/actionTypes'

let templateReducer = (state, action) => {
    //initialize state
    if (state === undefined)
    {
        state = {
            count: 0,
            someArray: []
        }
    }
    switch(action.type)
    {
        case PLUS:
            return{
                ...state,
                //any changes that need to be made
                count: state.count + action.count
            }
        case ADD:
            return{
                ...state,
                //any changes that need to be made
                someArray: state.someArray.concat(action.data)
            }
        case DELETE:
            let filteredArray = state.someArray.filter(item => {
                return item.id != action.id
            })
            return{
                ...state,

            }
        default:
            return state
    }
}

export default templateReducer