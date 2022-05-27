import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import React from 'react';

import HomeCategory from '../../components/HomeCategory';
import styles from './styles';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;