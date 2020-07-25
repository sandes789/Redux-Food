import {
    FOOD_API,
} from '../actions/type'

const initialState = {
    foodList: []
}

export default function ( state = initialState, action ){
    switch(action.type){
        case FOOD_API:
            return{
                ...state,
                foodList: [ ...action.payload]
            }
        default:
            return state
    }
}