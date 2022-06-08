import React from 'react';
import { Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { View, Text } from '../../components/Themed';
import { Episode } from '../../types';

import styles from './styles';

interface EpisodeItemProps {
  episode: Episode;
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode } = props;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>

        <Octicons name="download" size={24} color="white" />
      </View>

      <Text style={styles.plot}>{episode.plot}</Text>
    </View>
  );
};

export default EpisodeItem;
