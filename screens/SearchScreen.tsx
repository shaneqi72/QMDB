import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
