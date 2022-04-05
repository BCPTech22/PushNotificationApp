import {createStackNavigator} from 'react-navigation-stack';
import settings from '../screens/About/About';

const screens = {
  settings: {
    screen: settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
};

const settingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default settingsStack;
