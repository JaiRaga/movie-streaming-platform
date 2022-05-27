import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import React from 'react';

import categories from '../../assets/data/categories';
import styles from './styles';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  console.log(category);
  return (
    <View>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </View>
  );
};

export default HomeCategory;
