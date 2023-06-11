const INITIAL_VALUE = {
    list: []
}

export default function MoviesRed(state = INITIAL_VALUE, action){

    switch(action.type){
        case "GET_MOVIES": 
        return{
            ...state, // ES6
            list: action.payload
        }
        default: 
            return state
    }
}