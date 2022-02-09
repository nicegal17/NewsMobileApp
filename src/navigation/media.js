import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MediaScreen from '../screens/MediaScreen';
import Color from '../theme/Color';

const Stack = createNativeStackNavigator();

function MediaStack() {
  return (
    <Stack.Navigator
      initialRouteName="MediaScreen"
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
      <Stack.Screen name="MediaScreen" component={MediaScreen} />
    </Stack.Navigator>
  );
}

export default MediaStack;
