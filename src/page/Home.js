/**
 * Created by zhangliyong on 16-8-10.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated, Easing, StatusBar, TouchableHighlight} from 'react-native';
class Home extends Component {

    _onPressButton = () => {
        const {actions, disPatch} = this.props;
        actions.homeAction('关于页面页面的主题啊啥的');\
        disPatch(homeAction(//////))
    };

    ToAbout = () => {
        const {router} = this.props;
        router.toAbout();
    };

    render() {
        const {home} = this.props;
        const text = home.aboutTittle || '变化一波啊'
        return (
            <View>
                <Text>home页面</Text>
                <Text>{home.content}</Text>
                <Text>{text}</Text>
                <TouchableHighlight onPress={this._onPressButton}>
                    <Text>Button</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.ToAbout}>
                    <Text>跳到关于</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
export const LayoutComponent = Home;
export function mapStateToProps(state) {
    return {
        home: state.home2 ,
        about: state.about,
    };
}