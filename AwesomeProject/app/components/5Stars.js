import React from 'react';
import {Image, Text} from 'react-native';

export default class Stars extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let list = [];
        let i;
        for (i=1; i<=this.props.val; i++)
            list.push(<Image key={i} style={this.props.style} accessibilityRole={'image'} source={require('./StarFull.png')}></Image>);
        for (; i<=5; i++)
            list.push(<Image key={i} style={this.props.style} accessibilityRole={'image'} source={require('./StarEmpty.png')}></Image>);

        return (
            <Text>{list}</Text>
        ) 
    }
}