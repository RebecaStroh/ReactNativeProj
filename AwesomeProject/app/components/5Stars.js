import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Stars extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let list = [];
        let i;
        for (i=1; i<=this.props.val; i++)
            list.push(<Icon key={i} name="star" style={this.props.style}/>);
        for (; i<=5; i++)
            list.push(<Icon key={i} name="star-outlined" style={this.props.style}/>);

        return list;
    }
}