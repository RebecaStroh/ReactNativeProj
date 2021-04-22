import 'react-native-gesture-handler';
import React from 'react';
import NewTask from './components/NewTask.js';
import Task from './components/Task.js';
import TaskList from './components/TaskList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const List = ({ route, navigation }) => {
  return <TaskList navigation={navigation} ></TaskList>
}

const New = ({ route, navigation }) => {
  return <NewTask navigation={navigation} route={route}/>
}

const Info = ({ route, navigation }) => {
  return <Task navigation={navigation} route={route}/>
}
export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Minhas Tarefas" component={List} />
          <Stack.Screen name="Nova Tarefa" component={New} />
          <Stack.Screen name="Detalhes" component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
