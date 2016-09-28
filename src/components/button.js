import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import Colors from '../values/colors';

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight underlayColor={Colors.buttonHighlightColor}
                          style={[this.props.style, styles.button]}
                          onPress={this.props.onPress}>
        <Text style={styles.text}>{ this.props.children }</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonColor,
    borderRadius: 3,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  text: {
    color: Colors.textColorInverted,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
