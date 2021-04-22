import React from'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './Header.js';
import Database from './Database.js';
import Section from './Section.js';
import Stars from './5Stars.js';

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    star: {
        padding:0,
    }
})
export default class TaskList extends React.Component {
    constructor (props) {
        super(props);

        this.props.navigation.setOptions({
            headerRight: () => (
                <Button title="Nova +" onPress={this.newTask}></Button>
            ),
        });

        this.state = {data: ''}
    }
    
    async componentWillMount() {
        Database.getAll(this.isReady);
    }

    updatePage = () => {
        Database.getAll(this.isReady);
    }

    newTask = () => {
        this.props.navigation.navigate('Nova Tarefa', { onComplete: this.updatePage.bind(this)});
    }

    isReady = (list) => {
        this.setState({data: list})
    }

    InfoTask = (e, key) => {
        this.props.navigation.navigate('Detalhes', { task: key, onComplete: this.updatePage.bind(this) });
    }

    render() {        
        return (<>
            <Header name='Minhas Tarefas'/>
            <View style={{backgroundColor: Colors.white}}>
                
                <FlatList
                    ListEmptyComponent={(<Section title='Nenhuma tarefa para mostar.'></Section>)}
                    data={this.state.data}
                    renderItem={({ item }) => <Section key={item.key} title={item.titulo}>
                        <View style={styles.stars}>
                            <Stars style={styles.star} val={item.nota} changeable='false'/>
                            <Button title=">" onPress={(e) => this.InfoTask(e, item.key)}></Button>
                        </View>
                    </Section> }
                    />
            </View></>
        )
    }
}
