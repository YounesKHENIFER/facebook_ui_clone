import React from 'react';
import Header from '../components/main/Header';
import {Box} from 'native-base';
import MyTabs from '../navigation/Tabs';

export default function MainScreen() {
  return (
    <Box flex="1">
      {/* header */}
      <Header />

      {/* tabs */}
      <MyTabs />
    </Box>
  );
}
