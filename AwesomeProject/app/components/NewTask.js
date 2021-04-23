import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Alert, StyleSheet, View, Button, TextInput} from 'react-native';
import Header from './Header.js';
import Section from './Section.js';
import Stars from './5Stars.js';
import Database from './Database.js';
import Icon from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const newStyle = StyleSheet.create({
    outside: {
        textAlign: 'center',
        backgroundColor: Colors.white,
        paddingBottom: '80%'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },
    star: {
        fontSize: 60,
    },
    stars: {
        padding:30,
        flexDirection: 'row',
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

        this.props.navigation.setOptions({
            headerRight: () => (
                <Icon.Button name="add-to-list" color='black' backgroundColor='#ffffff'
                                            onPress={this.handleNew}/>
            ),
        });
    }

    handleNew = () => {
        if (this.value.titulo == '') 
            Alert.alert("Falta Informação", "O titulo é obrigatório.", [{text: "OK"}]);
        else
            Database.storeData(this.value).then(() => {
                this.props.route.params.onComplete();
                this.props.navigation.navigate('Minhas Tarefas');
            });
    }

    handleChangeTitle = (event) => {
        this.value.titulo = event;
    }

    handleChangeDesc = (event) => {
        this.value.descricao = event;
    }

    handleChangeNota = (value) => {
        this.value.nota = value;
    }

    render() {
        return (
        <KeyboardAwareScrollView innerRef={ref => {this.scroll = ref}}>
            <Header name='Nova Tarefa'/>
            <View style={newStyle.outside}>
                <Section title="Título *">
                    <TextInput 
                        style= {newStyle.input}
                        placeholder="Insira seu titulo aqui" 
                        onChangeText={this.handleChangeTitle}>
                    </TextInput>
                </Section> 
                <Section title="Descrição">
                    <TextInput 
                        style= {newStyle.input}
                        placeholder="Insira sua descrição aqui" 
                        onChangeText={this.handleChangeDesc}
                        autofocus>
                    </TextInput>
                </Section> 
                <View style={newStyle.stars}>
                    <Stars val='0' style={newStyle.star} changeable='true' onChange={this.handleChangeNota}></Stars>
                </View>
            </View>
        </KeyboardAwareScrollView>
        )
    }
}