/**
 * Created by zhangliyong on 16-8-10.
 */
import * as types from '../actions/actionTypes';
let initialState = {
    content: '主页面'
};
export default function (state = initialState, action) {
    const {text, type} = action;
    switch (type) {
        case types.homeAction:
            return {
                ...state,
                aboutTittle: action.text,
                loading: true,
            };
        default:
            return state;
    }
}