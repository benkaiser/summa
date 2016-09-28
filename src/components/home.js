import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Button from './button';
import Colors from '../values/colors';
import { Actions } from 'react-native-router-flux';

class HomeView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={Actions.test}>
          Start Test
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonPadding: {
    marginTop: 20,
  },
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeView;
