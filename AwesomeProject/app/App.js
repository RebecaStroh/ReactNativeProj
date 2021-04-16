import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewTask from './components/NewTask.js';
import Task from './components/Task.js';
import TaskList from './components/TaskList.js';


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

let isDarkMode = false;
  
let backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          {this.state.tipo == 'list'
          ? 
            <TaskList isDarkMode={isDarkMode} new={this.handleClickNew} more={this.handleClickMore}></TaskList>
          : (this.state.tipo == 'new' ?
            <NewTask isDarkMode={isDarkMode} back={this.handleClickBack}></NewTask>
          : 
            <Task isDarkMode={isDarkMode} back={this.handleClickBack}></Task>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
};
