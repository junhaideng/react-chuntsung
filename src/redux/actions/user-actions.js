import {SET_LOGIN} from "./action-types";

export function setLogin(payload) {
    return {
        type: SET_LOGIN,
        payload: payload
    }
}

