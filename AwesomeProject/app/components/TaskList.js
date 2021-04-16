import React from'react';
import Header from './Header.js';
import {Text, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section.js';

export default class TaskList extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
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