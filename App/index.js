 
'use strict';

import React from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar} from 'react-native-tabbar';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} = React;

/**
* Main App component:
* It contains the TabBar
*/
class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.toggle = false;
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  render() {
    
    return (

      <Tabbar ref="myTabbar" barColor={'gray'}>
        <Tab name="home">
          <IconWithBar label="Me" />
          <RawContent>
            
            <View style={{ flex: 1,alignItems: 'center', justifyContent:'center' }}>
              
              <Text onPress={()=>console.log('Me')}>Me</Text>

            </View>
          </RawContent>
        </Tab>
        <Tab name="camera">
          <IconWithBar label="Friends" />
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('camera')}>Camera</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="stats">
          <IconWithBar label="Add" />
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('stats')}>Stats</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="favorite">
          <IconWithBar label="Challenges" />
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('favorite')}>Favorite</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="settings">
          <IconWithBar label="More"/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('settings')}>Settings</Text>
            </View>
          </RawContent>
        </Tab>
      </Tabbar>
      
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
   messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

AppRegistry.registerComponent('Application', () => App);
