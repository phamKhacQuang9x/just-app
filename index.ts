/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppProvider from './src/app/AppProvider';

AppRegistry.registerComponent(appName, () => AppProvider);
