import React from 'react'
import {Alert, View, Text, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section.js';
import Header from './Header.js';
import Stars from './5Stars.js';
import Database from './Database.js';

const newStyle = {
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    stars: {
        padding:30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    star: {
        fontSize: 50
    }
};
export default class Task extends React.Component {
    constructor(props) {
        super(props);

        this.props.navigation.setOptions({
            headerRight: () => (
                <Button title="Delete" onPress={this.handleDelete}/>
            ),
        });
        console.log(props)
        this.state = {data: ''}
    }
    
    async componentWillMount() {
        Database.getTask(this.props.route.params.task).then((data) => this.setState({data: data}));
    }

    handleDelete = () => {
        Alert.alert("Confirmação", "Deseja realmente deletar esta tarefa ?", [
            {text: "Sim", onPress: () => {
                Database.deleteTask(this.props.route.params.task).then(() => {
                    alert("Tarefa deletada")
                    this.props.route.params.onComplete();
                    this.props.navigation.navigate('Minhas Tarefas');
                }); 
            }},
            {text: "Não", onPress: () => {}}
        ]);
    }

    render() {
        return (<>
            <Header name={this.state.data.titulo}/>
            <View style={{backgroundColor: Colors.white}}>
                <Section title="Conteúdo:">
                    <Text style={{ fontSize: 20}}>{this.state.data.descricao}</Text>
                </Section> 
                <View style={newStyle.stars}>
                    <Stars val={this.state.data.nota} style={newStyle.star} changeable='false'></Stars>
                </View>
            </View>
            </>
        )
    }
}