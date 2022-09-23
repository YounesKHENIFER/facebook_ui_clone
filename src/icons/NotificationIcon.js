import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

export default function (props) {
  return (
    <Ionicons
      name={props.filled ? 'notifications' : 'notifications-outline'}
      {...props}
    />
  );
}
