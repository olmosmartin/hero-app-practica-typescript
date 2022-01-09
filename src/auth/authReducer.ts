import { types } from "../types/types";
import { ActionAuthReducer } from "../models/ActionAuthReducer";

/*
const state = {
    usuario: "",
    logged: false
}
*/


export const authReducer = (state = {}, action:ActionAuthReducer) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                ...action.payload,
                logged: true
            };
        case types.logout:
            return {
                logged: false
            };
        default:
            return state;
    }

}