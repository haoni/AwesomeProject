// src/index.js

import HomeView from './Home/HomeView';
import AboutView from './About/AboutView';
import DashBoardView from './DashBoard/DashBoardView';
  
import ChartDetailView from './DashBoard/ChartDetailView';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: HomeView,
    About: AboutView,
    DashBoard: DashBoardView,
    ChartDetail: ChartDetailView
  })
);

export default Routes;