import React from 'react'
import {View, Text, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section.js';
import Header from './Header.js';
import Stars from './5Stars.js';

const newStyle = {
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    star: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
    }
};
export default class Task extends React.Component {
    render() {
        return (<>
            <Header name='titulo'/>
            <View style={{backgroundColor: Colors.white}}>
                <Section title="Conteúdo:">
                    <Text>oi</Text>
                </Section> 
            <Stars val='1' style={newStyle.star}></Stars>
            </View>
            </>
        )
    }
}