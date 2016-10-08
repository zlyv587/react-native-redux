/**
 * Created by zhangliyong on 16-8-10.
 */
import React from 'react';
import ReactNative from 'react-native';
import {Navigator, Platform, BackAndroid} from 'react-native';
import * as About from '../page/About';
import connectComponent from '../utils/connectComponent';
import * as CustomSceneConfigs from './sceneConfig';
//const {} = Navigator;
class Router {
    constructor(navigator) {
        this.navigator = navigator;
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', ()=> {
                const routesList = this.navigator.getCurrentRoutes();
                const currentRoute = routesList[routesList.length - 1];
                if (currentRoute.name !== 'home') {
                    navigator.pop();
                    return true;
                }
                return false;
            });
        }
    }

    push(props = {}, route) {
        let routesList = this.navigator.getCurrentRoutes();
        let nextIndex = routesList[routesList.length - 1].index + 1;
        route.props = props;
        route.index = nextIndex;
        route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight;
        route.component = connectComponent(route.component);
        this.navigator.push(route);
    }


    pop() {
        this.navigator.pop();
    }

    toAbout(props) {
        this.push(props, {
            component: About,
            name: 'about',
            sceneConfig: CustomSceneConfigs.customFloatFromBottom
        });
    }

    toHome(props) {
        this.push(props, {
            component: Home,
            name: 'home',
            sceneConfig: CustomSceneConfigs.customFloatFromBottom
        })
    }
}
export default Router;