/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import IntroStack from './src/navigation/tab';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/stores';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <IntroStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

// eslint-disable-next-line no-undef
if (__DEV__) {
  if (
    global.location &&
    (global.location?.pathname?.includes('/debugger-ui') ||
      global.location?.pathname?.includes('Debugger'))
  ) {
    global.XMLHttpRequest = global.originalXMLHttpRequest
      ? global.originalXMLHttpRequest
      : global.XMLHttpRequest;
    global.FormData = global.originalFormData
      ? global.originalFormData
      : global.FormData;
  }
}

export default App;
