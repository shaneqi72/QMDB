import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
