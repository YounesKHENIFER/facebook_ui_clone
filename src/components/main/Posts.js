import posts from '../../assets/posts';
import React from 'react';
import {Avatar, Box, HStack, Image, Text, VStack} from 'native-base';
import GlobalIcon from '../../icons/GlobalIcon';
import MenuHIcon from '../../icons/MenuHIcon.js';
import LikeIcon from '../../icons/LikeIcon.js';
import CommentIcon from '../../icons/CommentIcon.js';
import ShareIcon from '../../icons/ShareIcon.js';

export default function Posts() {
  return (
    <VStack flex="1" space="10px">
      {posts.map((post, i) => (
        <Post post={post} key={i} />
      ))}
    </VStack>
  );
}

function Post({post}) {
  return (
    <Box bg="#fff" w="full">
      {/* details */}
      <HStack
        px="15px"
        py="10px"
        justifyContent="space-between"
        alignItems="center">
        {/* user */}
        <HStack alignItems="center" space="10px">
          <Avatar source={{uri: post.profile}} size="md" />
          <Box>
            <Text fontSize="md" fontWeight="bold">
              {post.username}
            </Text>
            <HStack alignItems="center" space="10px">
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                {post.time}
              </Text>
              <GlobalIcon size={15} color="gray" />
            </HStack>
          </Box>
        </HStack>
        {/* menu */}
        <MenuHIcon size={25} color="gray" />
      </HStack>

      {/* desc */}
      {!!post?.description && (
        <Text px="10px" fontSize="md" mb="10px">
          post?.description
        </Text>
      )}

      {!!post?.image && (
        <Image
          source={{uri: post?.image}}
          alt="image post"
          w="full"
          h="200px"
        />
      )}

      {/* footer */}
      <VStack space="5px" my="10px">
        {/* counts */}
        <HStack px="10px" my="10px">
          <Text color="gray.700" flex="1">
            Likes : {post.likes_count}
          </Text>
          <Text color="gray.700">{post.comments_count} comments</Text>
          <Text color="gray.700" ml="10px">
            {post.shares_count} shares
          </Text>
        </HStack>
        {/* icons */}
        <HStack
          borderTopColor="gray.200"
          borderTopWidth="2px"
          alignItems="center"
          pt="10px"
          justifyContent="space-evenly">
          <HStack space="10px" alignItems="center">
            <LikeIcon size={25} />
            <Text color="gray.700" fontSize="md" fontWeight="medium">
              Like
            </Text>
          </HStack>

          <HStack space="10px" alignItems="center">
            <CommentIcon size={25} />
            <Text color="gray.700" fontSize="md" fontWeight="medium">
              Comment
            </Text>
          </HStack>

          <HStack space="10px" alignItems="center">
            <ShareIcon size={25} />
            <Text color="gray.700" fontSize="md" fontWeight="medium">
              Share
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}
