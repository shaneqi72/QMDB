import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {API_KEY, API_URL} from '../Config';

type MovieListTitleProp = {
  title: string;
};

const MovieListTitle = ({title}: MovieListTitleProp) => {
  const fetchPopularMovies = (page: number) => {
    fetch(
      `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        page || 1
      }`,
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchPopularMovies(1);
  }, []);

  return (
    <View style={styles.title}>
      <Text>{title}</Text>
      <Text>See All</Text>
    </View>
  );
};

export default MovieListTitle;

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 5,
  },
});
