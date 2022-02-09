import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/ProfileScreen';
import Color from '../theme/Color';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
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
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
