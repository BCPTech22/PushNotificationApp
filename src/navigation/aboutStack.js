import {createStackNavigator} from 'react-navigation-stack';
import about from '../screens/About/About';

const screens = {
  about: {
    screen: about,
    navigationOptions: {
      title: 'About',
    },
  },
};

const aboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 60},
  },
});

export default aboutStack;
