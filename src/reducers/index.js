/**
 * Created by zhangliyong on 16-8-10.
 */
import { combineReducers } from 'redux';
import home from './home';
import about from './about';
export default combineReducers({
    home,
    about,
});