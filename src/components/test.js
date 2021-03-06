import Exponent from 'exponent';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import Button from './button';
import Colors from '../values/colors';
import Question from '../models/question';
import Results from '../models/results';

let lastQuestion = null;

class TestView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.nextQuestion(lastQuestion);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={this.textStyle()}>{ this.state.text }</Text>
        <TextInput
          autoFocus={true}
          blurOnSubmit={false}
          keyboardType="numeric"
          onSubmitEditing={this.submitAnswer.bind(this)}
          ref="answerInput"
          style={styles.response} />
      </View>
    );
  }

  answerFail() {
    this.setState({ error: true });
  }

  answerSuccess() {
    this.setState(this.nextQuestion());
    this.refs.answerInput.clear();
    Results.incrementTotal();
  }

  gradeAnswer(text) {
    let val = parseInt(text);
    (val === this.state.answer) ? this.answerSuccess() : this.answerFail();
  }

  nextQuestion(question) {
    let state = question || Question.create();
    lastQuestion = state;
    state.error = false;
    return state;
  }

  submitAnswer(event) {
    let text = event.nativeEvent.text;
    text.length > 0 && this.gradeAnswer(text);
  }

  textStyle() {
    let style = [styles.question];
    if (this.state.error) style.push(styles.question_error);
    return style;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    marginTop: StatusBar.currentHeight || 20,
  },
  question: {
    fontWeight: '500',
    fontSize: 30,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
  },
  question_error: {
    color: 'red',
  },
  response: {
    flex: 1,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    fontSize: 15,
    padding: 10,
  },
});

export default TestView;
