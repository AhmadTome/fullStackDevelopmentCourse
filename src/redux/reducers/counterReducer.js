import {DECREMENT, INCREMENT, USER_CHANGED} from "../actions/actionsType";


const counterReducer = (state = {count:0, user: "Ahmad"}, action) => {

    if (action.type === INCREMENT) {
            return {...state, count: state.count + action.value};
    } else if (action.type === DECREMENT) {
        return {...state, count: state.count - action.value};
    } else if (action.type === USER_CHANGED) {
        return {...state, user: "Alaa"};
    }

    return state;
}


export default counterReducer;