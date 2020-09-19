/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Barchart1 from './src/screens/Barchart1';
import StackChart from './src/screens/Stackchart';

import Project from './src/screens/Project';

AppRegistry.registerComponent(appName, () => Project);
