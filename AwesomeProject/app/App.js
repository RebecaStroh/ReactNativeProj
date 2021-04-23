import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './screens/Task.js';
import NewTask from './screens/NewTask.js';
import TaskList from './screens/TaskList.js';

const List = ({ route, navigation }) => {
  return <TaskList navigation={navigation} route={route}></TaskList>
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
        <Stack.Navigator screenOptions={{title: ''}}>
          <Stack.Screen name="Minhas Tarefas" component={List} />
          <Stack.Screen name="Nova Tarefa" component={New} />
          <Stack.Screen name="Detalhes" component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
