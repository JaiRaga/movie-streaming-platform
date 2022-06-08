import { Image, FlatList, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import categories from '../../assets/data/categories';
import styles from './styles';
import movie from '../../assets/data/movie';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  // console.log(category);

  const navigation = useNavigation()

  const onMoviePress = (movie) => {
    navigation.navigate('MovieDetailsScreen', {id: movie.id})
  };
  return (
    <View>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCategory;
