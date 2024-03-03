/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);

const firebaseConfig = {
  apiKey: 'AIzaSyDpF8rLxJr8-LeiewnCCqJgi9L3J_4fVEs',
  authDomain: 'voucherapp-e46d1.firebaseapp.com',
  projectId: 'voucherapp-e46d1',
  storageBucket: 'voucherapp-e46d1.appspot.com',
  messagingSenderId: '279608246337',
  appId: '1:279608246337:web:660be3021e67dcaf1186c0',
};
