import { AsyncStorage } from 'react-native';

export default class Results {
  static keyName = 'Results.total';
  static listeners = [];

  static getTotal(callback) {
    AsyncStorage.getItem(this.keyName, (err, result) => {
      if (result === null) return callback(0);
      callback(parseInt(result));
    });
  }

  static incrementTotal() {
    this.getTotal((total) => {
      AsyncStorage.setItem(this.keyName, (total + 1).toString());
      this.callListeners();
    });
  }

  static addListener(callback) {
    this.listeners.push(callback);
  }

  static callListeners() {
    this.listeners.forEach((listener) => {
      console.log('listener called');
      listener();
    });
  }
};
