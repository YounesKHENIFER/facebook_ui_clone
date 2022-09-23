import {View, Text} from 'react-native';
import React from 'react';
import Input from '../components/main/Input';
import {Box, ScrollView} from 'native-base';
import Stories from '../components/main/Stories';
import Posts from '../components/main/Posts';

export default function HomeScreen() {
  return (
    <ScrollView bg="gray.200" flex="1">
      <Input />

      {/* stories */}
      <Stories />

      {/* posts */}
      <Posts />
    </ScrollView>
  );
}
