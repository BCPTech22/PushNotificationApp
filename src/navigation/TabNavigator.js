import React from 'react';

import {HomeStackNavigator} from './index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeStackNavigator} />
      <Tab.Screen name="About" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={HomeStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
