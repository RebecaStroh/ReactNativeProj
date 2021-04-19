import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewTask from './components/NewTask.js';
import Task from './components/Task.js';
import TaskList from './components/TaskList.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
  
let backgroundStyle = {
  backgroundColor: Colors.lighter,
};
export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {tipo:'new'};
    //isDarkMode = useColorScheme() === 'dark';
    this.handleClickNew = this.handleClickNew.bind(this);
    this.handleClickMore = this.handleClickMore.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickNew() {
    this.setState({tipo: 'new'});
  }

  handleClickMore() {
    this.setState({tipo: 'info'});
  }

  handleClickBack() {
    this.setState({tipo: 'list'});
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={({ navigation }) => (<TaskList navigation={navigation} />)} />
          <Stack.Screen name="New" component={({ navigation }) => (<NewTask navigation={navigation} />)} />
          <Stack.Screen name="Info" component={({ navigation }) => (<Task navigation={navigation} />)} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
{/* <StatusBar barStyle={'dark-content'} />
<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
  {this.state.tipo == 'list'
  ? 
    <TaskList new={this.handleClickNew} more={this.handleClickMore}/>
  : (this.state.tipo == 'new' ?
    <NewTask back={this.handleClickBack}/>
  : 
    <Task back={this.handleClickBack}/>
  )}
</ScrollView> */}
{/* <Stack.Navigator>
        <Stack.Screen name="List" component={<TaskList/>} />
        <Stack.Screen name="New" component={<NewTask/>} />
        <Stack.Screen name="Info" component={<Task/>} />
      </Stack.Navigator> */}
