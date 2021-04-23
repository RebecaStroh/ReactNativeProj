import React from'react';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import Database from '../lib/Database.js';
import Stars from '../components/5Stars.js';
import Header from '../components/Header.js';
import Section from '../components/Section.js';

const styles = StyleSheet.create({
    outside: {
        paddingBottom: '80%',
        backgroundColor: Colors.white,
        textAlignVertical: 'center'
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    star: {
        padding:0,
    },
    item: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingRight: 20,
        paddingBottom: 15,
        borderBottomWidth: 1
    }
})
export default class TaskList extends React.Component {
    constructor (props) {
        super(props);

        this.props.navigation.setOptions({
            headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                    <Icon.Button name="trash" color='black' backgroundColor='#ffffff'
                                            onPress={this.deleteAllTasks}/>
                    <Icon.Button name="plus" color='black' backgroundColor='#ffffff'
                                            onPress={this.newTask}/>
                </View>
            ),
        });

        this.state = {data: ''}
    }
    
    async componentDidMount() {
        Database.getAll().then((list) => this.isReady(list));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.route.params?.data !== this.props.route.params?.data) {
            this.updatePage();
            this.props.route.params.data = 'up to date';
        }
    }

    updatePage = () => {
        Database.getAll().then((list) => this.isReady(list));
    }

    isReady = (list) => {
        this.setState({data: list})
    }

    deleteAllTasks = () => {
        Alert.alert("Confirmação", "Deseja realmente apagar todas as tarefas?", [
            {text: "Sim", onPress: () => {
                Database.clear().then(() => {
                    alert("Tarefas deletadas");
                    this.updatePage();
                }); 
            }},
            {text: "Não", onPress: () => {}}
        ]);
    }

    newTask = () => {
        this.props.navigation.navigate('Nova Tarefa');
    }

    InfoTask = (e, key) => {
        this.props.navigation.navigate('Detalhes', { task: key });
    }

    render() {        
        return (<>
            <Header name='Minhas Tarefas'/>
            <View style={styles.outside}>
                <FlatList
                    ListEmptyComponent={(<Section title='Nenhuma tarefa para mostar.'/>)}
                    data={this.state.data}
                    renderItem={({ item }) => 
                        <View style={styles.item}>
                            <Section key={item.key} title={item.titulo}>
                                <View style={styles.stars}>
                                    <Stars style={styles.star} val={item.nota} changeable='false'/>
                                </View>
                            </Section> 
                            <Icon.Button name="chevron-right" color='black' backgroundColor='#ffffff'
                                        onPress={(e) => this.InfoTask(e, item.key)}/>
                        </View>}
                />
            </View></>
        )
    }
}
