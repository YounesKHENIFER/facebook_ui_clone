import React from 'react';
import {Box, Center, HStack, Image, Text} from 'native-base';
import {NativeModules, TouchableOpacity} from 'react-native';
import SearchIcon from '../../icons/SearchIcon';
import MessangerIcon from '../../icons/MessangerIcon';
const {StatusBarManager} = NativeModules;

export default function Header() {
  return (
    <HStack
      alignItems="center"
      px="5px"
      bg="#fff"
      justifyContent="space-between"
      pt={StatusBarManager.HEIGHT + 'px'}
      pb="10px">
      {/* logo */}
      <Image
        source={{
          uri: 'https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png',
        }}
        h="50px"
        w="150px"
        style={{resizeMode: 'cover'}}
        alt="fb logo"
        ml="-10px"
      />
      {/* icons */}
      <HStack alignItems="center" space="10px">
        <TouchableOpacity>
          <Center w="40px" h="40px" bg="gray.200" rounded="full">
            <SearchIcon color="#000" size={25} />
          </Center>
        </TouchableOpacity>
        <TouchableOpacity>
          <Center w="40px" h="40px" bg="gray.200" rounded="full">
            <MessangerIcon color="#000" size={25} />
          </Center>
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
}
