import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
};

const BottomTab = createBottomTabNavigator<TabStackParamList>();

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
                type="font-awesome"
                color={focused ? '#59c1cc' : 'gray'}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Icon
                name="search"
                type="font-awesome"
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
