import React from 'react';
import Header from './Header.js';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import Section from './Section.js';
import Stars from './5Stars.js';
import Database from './Database.js';

const newStyle = StyleSheet.create({
    outside: {
        textAlign: 'center',
        backgroundColor: Colors.white
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
        justifyContent: 'center'
    }
});

export default class NewTask extends React.Component {
    constructor(props) {
        super(props);

        this.value = {
            titulo: '',
            descricao: '',
            nota: 0
        }
    }

    handleNew = () => {
        Database.storeData(this.value);
        this.props.navigation.navigate('List')
    }

    handleChangeTitle = (event) => {
        this.value.titulo = event;
    }

    handleChangeDesc = (event) => {
        this.value.descricao = event;
    }

    handleChangeNota = (event) => {
        this.value.nota = event;
    }

    render() {
        return ( <>
        <View style={newStyle.outside}>
            <Button title="Add" onPress={this.handleNew}/>
            <Section title="Título">
                <TextInput 
                    style= {newStyle.input}
                    placeholder="Insira seu titulo aqui" 
                    keyboardType="numeric"
                    onChangeText={this.handleChangeTitle}>
                </TextInput>
            </Section> 
            <Section title="Descrição">
                <TextInput 
                    style= {newStyle.input}
                    placeholder="Insira sua descrição aqui" 
                    keyboardType="numeric"
                    onChangeText={this.handleChangeDesc}>
                </TextInput>
            </Section> 
            <View style={newStyle.stars}>
                <Stars val='0' style={newStyle.star}></Stars>
            </View>
        </View></>
        )
    }
}