/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Navigation} from './src/navigation';
import BottomTabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';

/*const RootNavigator = createStackNavigator({
  Login: { screen: SignInScreen ,
      headerShown: false,
    }
  },
  AfterLogin: { screen: HomeScreen,
      headerShown: false,
    } },
});*/
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
