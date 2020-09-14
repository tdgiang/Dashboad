/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Barchart from './src/screens/Barchart';
import StackChart from './src/screens/Stackchart';

AppRegistry.registerComponent(appName, () => StackChart);
