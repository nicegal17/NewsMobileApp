import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DiscoverScreen from '../screens/DiscoverScreen';
import Color from '../theme/Color';

const Stack = createNativeStackNavigator();

function DiscoverStack() {
  return (
    <Stack.Navigator
      initialRouteName="DiscoverScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: Color.colorPrimary,
        },
        headerTitle: null,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Stack.Navigator>
  );
}

export default DiscoverStack;
