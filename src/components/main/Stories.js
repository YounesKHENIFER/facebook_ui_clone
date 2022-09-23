import React from 'react';
import {Avatar, Box, Center, FlatList, HStack, Text, VStack} from 'native-base';
import stories from '../../assets/stories';
import {ImageBackground} from 'react-native';
export default function Stories() {
  return (
    <Box bg="#fff">
      {/* menu */}
      <HStack justifyContent="space-between" px="20px">
        <Center borderBottomColor="#2572dd" borderBottomWidth="3px" flex="1">
          <Text
            textAlign="center"
            flex="1"
            fontSize="xl"
            fontWeight="medium"
            py="10px"
            color="#2572dd">
            Stories
          </Text>
        </Center>
        <Text
          textAlign="center"
          flex="1"
          fontSize="xl"
          fontWeight="medium"
          py="10px"
          color="">
          Reels
        </Text>
      </HStack>

      {/* stories */}
      <FlatList
        my="10px"
        px="20px"
        data={stories}
        keyExtractor={(item, i) => i}
        renderItem={({item}) => <Story item={item} />}
        horizontal
        ItemSeparatorComponent={<Box w="10px" />}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
}

function Story({item}) {
  return (
    <Box bg="#ccc" h="230px" w="130px" rounded="xl" overflow="hidden">
      <ImageBackground source={{uri: item.image}} style={{flex: 1}}>
        <VStack justifyContent="space-between" flex="1">
          {/* avatar */}
          <Avatar
            m="10px"
            source={{
              uri: item.profile,
            }}
            size="35px"
            shadow="2"
          />

          {/* username */}
          <Text
            fontSize="lg"
            fontWeight="medium"
            color="white"
            shadow="5"
            m="10px">
            {item.username}
          </Text>
        </VStack>
      </ImageBackground>
    </Box>
  );
}
