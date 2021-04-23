/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
    background: {
        paddingBottom: 40,
        paddingTop: '20%',
        paddingHorizontal: 32,
        backgroundColor: Colors.lighter,
    },
    logo: {
        opacity: 0.2,
        overflow: 'visible',
        resizeMode: 'cover',
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.black,
    },
});

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
        <ImageBackground
            accessibilityRole={'image'}
            source={require('../images/logo.png')}
            style={styles.background}
            imageStyle={styles.logo}>
            <Text style={styles.text}>{this.props.name}</Text>
        </ImageBackground>
        )
    }
};