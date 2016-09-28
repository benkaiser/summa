import Exponent from 'exponent';
import React from 'react';
import {
  Navigator,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeView from './src/components/home';
import TestView from './src/components/test';

import {Scene, Router} from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" style={styles.container}>
          <Scene key="home" component={HomeView} title="Summa" initial={true} />
          <Scene key="test" component={TestView} title="Test" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 20,
  },
});

Exponent.registerRootComponent(App);
