import 'react-native-gesture-handler';
import React from 'react';
import NewTask from './components/NewTask.js';
import Task from './components/Task.js';
import TaskList from './components/TaskList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Minhas Tarefas" component={({ route, navigation }) => (<TaskList navigation={navigation} />)} />
          <Stack.Screen name="Nova Tarefa" component={({ route, navigation }) => (<NewTask navigation={navigation} route={route}/>)} />
          <Stack.Screen name="Detalhes" component={({ route, navigation }) => (<Task navigation={navigation} route={route}/>)} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
