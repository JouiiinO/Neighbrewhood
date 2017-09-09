import {
  StackNavigator,
} from 'react-navigation';

import MapScreen from './components/Map.js';
import AboutScreen from './components/About.js';
import HomeScreen from './components/Home.js';



export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Map: {
      screen: MapScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);
