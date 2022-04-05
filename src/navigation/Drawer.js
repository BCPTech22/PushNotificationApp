import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
// stacks
import settingsStack from './settingsStack';
import aboutStack from './aboutStack';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
// drawer navigation options
export default function drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="About" component={aboutStack} />
        <Drawer.Screen name="Settings" component={settingsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
