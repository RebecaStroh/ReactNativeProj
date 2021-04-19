import React from'react';
import Header from './Header.js';
import {Text, View, Button} from 'react-native';
import {Colors, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import Section from './Section.js';
import AsyncStorage from '@react-native-community/async-storage';

getAll = async (callback) => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const list = [];
        console.log(keys)
        for (k in keys) {
            const jsonValue = await AsyncStorage.getItem(keys[k])
            const jsonObject = JSON.parse(jsonValue)
            //console.log('{'+keys[k]+': '+jsonValue+'}')
            list.push(<Section title={keys[k]}></Section>)
        }
        return callback(list);
    } catch(e) {
        // error reading value
        alert(e)
    }
}

export default class TaskList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {ready: 'false'}
        this.list = [];
    }

    isReady = (list) => {
        this.setState = {ready: 'true'}
        this.list = list;
        console.log(list);
    }

    render() {
        getAll(this.isReady);
        
        return (<>
            <View style={{backgroundColor: Colors.white}}>
                <Button title="+" onPress={() => this.props.navigation.navigate('New')}></Button>
                {this.state == 'false' || this.list == []
                ? <Text>Nenhuma task até o momento</Text>
                : this.list
                }
            </View></>
        )
    }
}