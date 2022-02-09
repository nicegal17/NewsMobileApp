import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashboardStack from './main';
import DiscoverStack from './discover';
import MediaStack from './media';
import ProfileStack from './profile';

import HomeActiveSVG from '../assets/svg/home-active.svg';
import HomeSVG from '../assets/svg/home.svg';
import SearchActiveSVG from '../assets/svg/search-active.svg';
import SearchSVG from '../assets/svg/search.svg';
import MediaActiveSVG from '../assets/svg/media-active.svg';
import MediaSVG from '../assets/svg/media.svg';
import ProfileActiveSVG from '../assets/svg/profile-active.svg';
import ProfileSVG from '../assets/svg/profile.svg';

import Color from '../theme/Color';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 75,
          backgroundColor: Color.colorPrimary,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <HomeActiveSVG width={24} height={24} />
            ) : (
              <HomeSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={DiscoverStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <SearchActiveSVG width={24} height={24} />
            ) : (
              <SearchSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Media"
        component={MediaStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MediaActiveSVG width={24} height={24} />
            ) : (
              <MediaSVG width={24} height={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <ProfileActiveSVG width={24} height={24} />
            ) : (
              <ProfileSVG width={24} height={24} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
