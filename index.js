/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import Routes from "./src/View";

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Routes); 



/* 

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import Routes from "./src";

AppRegistry.registerComponent(appName, () => Routes); 

*/