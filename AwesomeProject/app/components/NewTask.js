import React from 'react';
import Header from './Header.js';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import Section from './Section.js';
import Stars from './5Stars.js';

export default class NewTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const newStyle = StyleSheet.create({
        outside: {
            textAlign: 'center',
            backgroundColor: this.props.isDarkMode ? Colors.black : Colors.white
        },
        input: {
            height: 40,
            margin: 12,
            padding: 10,
            borderWidth: 1,
        },
        star: {
            height: 50,
            width: 50,
            resizeMode: 'cover',
        }
        });

        return ( <>
        <Header name='Nova Tarefa'/>
        <View style={newStyle.outside}>
            <Button title="< Voltar" onPress={this.props.back}/>
            <Section title="Título">
                <TextInput 
                    style= {newStyle.input}
                    placeholder="Insira seu titulo aqui" 
                    keyboardType="numeric">
                </TextInput>
            </Section> 
            <Section title="Descrição">
                <TextInput 
                    style= {newStyle.input}
                    placeholder="Insira sua descrição aqui" 
                    keyboardType="numeric">
                </TextInput>
            </Section> 
            <Stars val='1' style={newStyle.star}></Stars>
            <Button title="Add"/>
        </View></>
        )
    }
}