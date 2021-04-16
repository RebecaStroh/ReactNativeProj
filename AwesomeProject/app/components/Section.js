import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

let isDarkMode = false;

const styles = {
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
};

export default class Section extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
                {this.props.title}
                </Text>
                {this.props.children}
            </View>
        );
    }
};