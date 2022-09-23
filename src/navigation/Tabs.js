import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {Box, HStack} from 'native-base';

const Tab = createMaterialTopTabNavigator();
import NotificationsScreen from '../screens/NotificationsScreen';
import VideosScreen from '../screens/VideosScreen';
import InvitaionsScreen from '../screens/InvitaionsScreen';
import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationIcon from '../icons/NotificationIcon';
import HomeIcon from '../icons/HomeIcon';
import PeopleIcon from '../icons/PeopleIcon';
import VideoIcon from '../icons/VideoIcon';
import MenuIcon from '../icons/MenuIcon';

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {
          backgroundColor: '',
        },
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#2572dd',
          height: 3,
        },
        tabBarIndicatorContainerStyle: {
          zIndex: 10000,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: route => {
            return (
              <HomeIcon
                filled={route.focused}
                size={25}
                color={route.focused ? '#2572dd' : '#888'}
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: route => {
            return (
              <PeopleIcon size={25} color={route.focused ? 'blue' : '#888'} />
            );
          },
        }}
        name="Invation"
        component={InvitaionsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: route => {
            return (
              <VideoIcon size={25} color={route.focused ? 'blue' : '#888'} />
            );
          },
        }}
        name="Videos"
        component={VideosScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: route => {
            return (
              <NotificationIcon
                size={25}
                color={route.focused ? 'blue' : '#888'}
              />
            );
          },
        }}
        name="Notifications"
        component={NotificationsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: route => {
            return (
              <MenuIcon size={28} color={route.focused ? 'blue' : '#888'} />
            );
          },
        }}
        name="Menu"
        component={MenuScreen}
      />
    </Tab.Navigator>
  );
}
