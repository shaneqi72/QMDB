import {Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MovieList from '../components/MovieList';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HomeScreen</Text>
        <MovieList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
