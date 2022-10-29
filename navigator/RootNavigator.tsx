import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Search: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={BottomTabNavigator} />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Search" component={SearchScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
