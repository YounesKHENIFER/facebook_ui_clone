import Stack from './navigation/Stack';
import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <NativeBaseProvider>
          <Stack />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
