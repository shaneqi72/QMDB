import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import {Icon} from '@rneui/themed';

export type BottomTabStackParamList = {
  Home: undefined;
  Search: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#59c1cc',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return (
              <Icon
                name="home"
                type="antdesign"
                color={focused ? '#59c1cc' : 'gray'}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Icon
                name="search"
                type="antdesign"
                color={focused ? '#EB6A7c' : 'gray'}
              />
            );
          }
        },
      })}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
