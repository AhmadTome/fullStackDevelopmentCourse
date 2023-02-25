import {DECREMENT, INCREMENT} from "./actionsType";

export const incrementAction = (val) => {
    return {
        type: INCREMENT,
        value: val
    }
}

export const decrementAction = (val) => {
    return {
        type: DECREMENT,
        value: val
    }
}