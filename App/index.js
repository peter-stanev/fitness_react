/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 
'use strict';

import React from 'react-native';
import Welcome from './components/Welcome';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';


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

// let {
//   Tab,
//   RawContent,
//   IconWithBar,
//   glypyMapMaker
// } = Tabbar;

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight 
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

let glypy = glypyMapMaker({
  Home: 'e900',
  Camera: 'e901',
  Stat: 'e902',
  Settings: 'e903',
  Favorite: 'e904',
});

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    // if (index === 0) {
    //   return null;
    // }

    // var previousRoute = navState.routeStack[index-1];
    
    return (
      <TouchableOpacity
        onPress={()=> navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>          
          {route.leftTitle}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={()=> navigator.push(newRandomRoute())}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {route.rightTitle}
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  }
};


// collects all route functions
var RouteManager = {

  // profile route
  profileRoute: function() {
    return {
      title: 'Me',
      rightTitle: 'GO PREMIUM',
      leftTitle: 'Location'
    }
  }
};

function newRandomRoute() {
  return {
    title: '#' + Math.ceil(Math.random()*1000)
  }
}


class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.toggle = false;
  }

  componentDidMount() {

  }

  tabbarToggle() {
    this.refs['myTabbar'].getBarRef().show(this.toggle);
    this.toggle = !this.toggle;
  }

  componentWillMount() {
    var navigator = this.props.navigator;

    var callback = (event) => {
      console.log(
        `NavigationBarSample : event ${event.type}`,
        {
          route: JSON.stringify(event.data.route),
          target: event.target,
          type: event.type,
        }
      );
    };

    // Observe focus change events from this component.
    // this._listeners = [
    //   navigator.navigationContext.addListener('willfocus', callback),
    //   navigator.navigationContext.addListener('didfocus', callback),
    // ];
  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  render() {
    // <NavButton
            //   onPress={() => {
            //     navigator.immediatelyResetRouteStack([
            //       newRandomRoute(),
            //       newRandomRoute(),
            //       newRandomRoute(),
            //     ]);
            //   }}
            //   text="Reset w/ 3 scenes"
            // >
            // </NavButton>
            // <NavButton
            //   onPress={() => {
            //     this.props.navigator.pop();
            //   }}
            //   text="Exit NavigationBar Example"
            // />
      //        <Navigator
      //   debugOverlay={false}
      //   style={styles.appContainer}
      //   initialRoute={RouteManager.profileRoute()}
      //   renderScene={(route, navigator) => (
      //     <ScrollView style={styles.scene}>
      //       <Text style={styles.messageText}>{route.content}</Text>
            
      //     </ScrollView>
      //   )}
      //   navigationBar={
      //     <Navigator.NavigationBar
      //       routeMapper={NavigationBarRouteMapper}
      //       style={styles.navBar}/>}
      // >
      // </Navigator>
    return (

      <Tabbar ref="myTabbar" barColor={'gray'}>
        <Tab name="home">
          <IconWithBar label="Me" />
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>this.tabbarToggle()}>Toggle Tabbar</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
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
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#FF00FF',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: 'blue',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

AppRegistry.registerComponent('Application', () => App);
