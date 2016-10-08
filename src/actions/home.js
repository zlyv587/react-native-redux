/**
 * Created by zhangliyong on 16-8-10.
 */
import * as type from './actionTypes.js'
export function homeAction(text) {
    return {
        type: type.homeAction,
        text: text,
    }
}