/**
 * Created by zhangliyong on 16-8-10.
 */
import React,{
    Component
} from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
const store = createStore(reducers);
import Navigation from './page/Navigation';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}


export default App;