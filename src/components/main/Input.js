import PictureIcon from '../../icons/PictureIcon';
import React from 'react';
import {Avatar, HStack, Input} from 'native-base';

export default function () {
  return (
    <HStack
      mb="10px"
      bg="#fff"
      px="15px"
      py="15px"
      space="10px"
      alignItems="center">
      {/* avatar */}
      <Avatar
        source={{
          uri: 'https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png',
        }}
        size="md"
      />

      {/* input */}

      <Input
        variant="rounded"
        flex="1"
        borderWidth="2px"
        placeholder="what's on your mind?"
        size="xl"
        placeholderTextColor="#000"
      />

      {/* picture */}
      <PictureIcon size={30} color="#46bb64" />
    </HStack>
  );
}
