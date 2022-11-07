import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import MovieListTitle from './MovieListTitle';

const MovieList = () => {
  return (
    <View>
      <MovieListTitle title="Feature Today" />
      <ScrollView horizontal={true}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ScrollView>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
