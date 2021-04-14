import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, Image, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header.js';

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

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
        {title}
      </Text>
      <Text style={[styles.sectionDescription, {color: isDarkMode ? Colors.light : Colors.dark}]}>
        {children}
      </Text>
    </View>
  );
};

class Stars extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    let list = [];
    let i;
    for (i=1; i<=this.props.val; i++)
      list.push(<Image style={this.props.style} accessibilityRole={'image'} source={require('./components/StarFull.png')}></Image>);
    for (; i<=5; i++)
      list.push(<Image style={this.props.style} accessibilityRole={'image'} source={require('./components/StarEmpty.png')}></Image>);

    return (
      <Section>
        {list}
      </Section>
    ) 
  }
}
class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newStyle = StyleSheet.create({
      outside: {
        textAlign: 'center'
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
      star: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
      }
    });

    return (
      <View style={newStyle.outside}>
        <Button title="< Voltar"/>
        <Section title="Título">
          <TextInput 
            style= {newStyle.input}
            placeholder="Insira seu titulo aqui" 
            keyboardType="numeric">
          </TextInput>
        </Section> 
        <Section title="Descrição">
          <TextInput 
            style= {newStyle.input}
            placeholder="Insira sua descrição aqui" 
            keyboardType="numeric">
          </TextInput>
        </Section> 
        <Stars val='1' style={newStyle.star}></Stars>
        <Button title="Add"/>
      </View>
    )
  }
}

let isDarkMode = false;
  
let backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};
export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {tipo:'new'};
    //isDarkMode = useColorScheme() === 'dark';
  }

  render() {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <Header name={this.state.tipo == 'list'? 'Minhas Tarefas' : (this.state.tipo == 'new' ? 'Nova Tarefa' : 'Info') }/>
          <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white}}>
            {this.state.tipo == 'list'
            ? 
              <Section title="Step One">
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Section> 
            : (this.state.tipo == 'new' ?
              <NewTask></NewTask>
            : 
              <Section title="Step Three">
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Section> 
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
