import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
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
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;
