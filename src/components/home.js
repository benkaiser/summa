import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './button';
import Colors from '../values/colors';
import { Actions } from 'react-native-router-flux';
import Results from '../models/results';

class HomeView extends React.Component {
  constructor() {
    super();
    this.state = this.initialState();
    Results.addListener(this.updateState.bind(this));
  }

  componentDidMount() {
    this.updateState();
  }

  initialState() {
    return { total: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={Actions.test}>
          Start Test
        </Button>
        <Text style={styles.results}>Total Answers: {this.state.total}</Text>
      </View>
    );
  }

  updateState() {
    Results.getTotal((total) => {
      this.setState({ total: total });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 70,
  },
  results: {
    fontSize: 16,
    paddingTop: 20,
    textAlign: 'center',
  },
});

export default HomeView;
