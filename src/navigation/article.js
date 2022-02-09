import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArticleDetailScreen from '../screens/ArticleDetailScreen';
const Stack = createNativeStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;
