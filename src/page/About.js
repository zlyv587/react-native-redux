/**
 * Created by zhangliyong on 16-8-10.
 */
import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {homeAction} from '../actions/home.js'
class About extends Component {
    render() {
        const {about} = this.props;
        return (
            <View>
                <Text>关于页面</Text>
                <Text>{about.content}</Text>
            </View>
        )
    }
}
export const LayoutComponent = About;
export function mapStateToProps(state) {
    return {
        about: state.about
    };
}