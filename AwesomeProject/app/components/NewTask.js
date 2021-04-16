import React from 'react';
import Header from './Header.js';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import Section from './Section.js';
import Stars from './5Stars.js';

export default class NewTask extends React.Component {
    constructor(props) {
        super(props);

        this.handleNew = this.handleNew.bind(this);
    }

    handleNew() {
        alert('Salva');
        this.props.back();
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
                fontSize: 60,
                textAlign: 'center'
            },
            stars: {
                padding:30,
                flex:1,
                flexDirection:'row',
                justifyContent: 'center'
            },
            buttons: {
                flex:1,
                flexDirection:'row',
                justifyContent: 'space-around'
            }
        });

        return ( <>
        <Header name='Nova Tarefa'/>
        <View style={newStyle.outside}>
            <View style={newStyle.buttons}>
                <Button title="< Voltar" onPress={this.props.back}/>
                <Button title="Add" onPress={this.handleNew}/>
            </View> 
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
            <View style={newStyle.stars}>
                <Stars val='1' style={newStyle.star}></Stars>
            </View>
        </View></>
        )
    }
}