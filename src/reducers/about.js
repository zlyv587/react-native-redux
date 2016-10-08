/**
 * Created by zhangliyong on 16-8-10.
 */
import * as types from '../actions/actionTypes';
let initialState = {
    content: '关于页面'
};
export default function (state = initialState, action) {
    const {text, type} = action;
    switch (type) {
        case types.aboutAction:
            return {
                ...state,
                aboutTittle: '关于的主题啊'
            };
        default:
            return state;
    }
}