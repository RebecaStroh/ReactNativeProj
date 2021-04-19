import React, { useCallback } from'react';
import Header from './Header.js';
import {Text, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section.js';
import AsyncStorage from '@react-native-community/async-storage';

getAll = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        console.log(keys)
        for (k in keys) {
            const jsonValue = await AsyncStorage.getItem(keys[k])
            console.log('{'+keys[k]+': '+jsonValue+'}')
        }
        return keys;
    } catch(e) {
        // error reading value
        alert(e)
    }
}

export default class TaskList extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        getAll()
        
        return (<>
            <Header name='Minhas Tarefas'/>
            <View style={{backgroundColor: this.props.isDarkMode ? Colors.black : Colors.white}}>
                <Button title="+" onPress={this.props.new}></Button>
                <Section title="Step One">
                    <Text>Edit  to change this screen and then come back to see your edits.</Text>
                </Section> 
            </View></>
        )
    }
}