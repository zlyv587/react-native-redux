/**
 * Created by zhangliyong on 16-8-10.
 */
import React, {Component, PropTypes} from 'react';
import {Navigator, StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import * as Home from './Home';
import Router from '../configs/Router';
import connectComponent from '../utils/connectComponent';
const initialRoute = {
    name: 'home',
    index: 0,
    component: connectComponent(Home),
};
class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    renderScene({ component, name, props, index }, navigator) {
        this.router = this.router || new Router(navigator);
        if (component) {
            return React.createElement(component, {
                ...props,
                ref: view => this[index] = view,
                router: this.router,
                route: {
                    name,
                    index
                }
            });
        }
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig
        }
        return Navigator.SceneConfigs.FloatFromRight
    }

    render() {
        return (
                <Navigator
                    ref={view => this.navigator=view}
                    initialRoute={initialRoute}
                    configureScene={this.configureScene.bind(this)}
                    renderScene={this.renderScene.bind(this)}/>
        )
    }
}
export default Navigation;