import {SET_LOGIN} from "../actions/action-types";
import {message} from "antd";

function reducer(state = {isLogin: false}, action) {
    switch (action.type) {
        case SET_LOGIN:
            if (action.payload){
                message.success("登录成功")
            }
            return {isLogin: action.payload}
        default:
            return state
    }
}

export default reducer