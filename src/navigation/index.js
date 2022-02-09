import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import RootStack from './tab';
import Color from '../theme/Color';

const Stack = createNativeStackNavigator();

function IntroStack() {
  return (
    <Stack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: Color.colorPrimary,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="RootStack" component={RootStack} />
    </Stack.Navigator>
  );
}

export default IntroStack;
