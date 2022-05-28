import React from 'react';
import { Image, Pressable } from 'react-native';
import { AntDesign, Entypo, MaterialIcons, Octicons } from '@expo/vector-icons';
import { View, Text } from '../../components/Themed';

import movie from '../../assets/data/movie';
import styles from './styles';

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.matchYear}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
          <MaterialIcons name="hd" size={24} color="white" />
        </View>
      </View>
      {/* Play button */}
      <Pressable onPress={() => console.warn('Play')} style={styles.playBtn}>
        <Text style={styles.playBtnText}>
          <Entypo name="controller-play" size={16} color="black" />
          Play
        </Text>
      </Pressable>
      {/* Download button */}
      <Pressable onPress={() => console.warn('Download')} style={styles.downloadBtn}>
        <Text style={styles.downloadBtnText}>
          <Octicons name="download" size={16} color="white" style={styles.downloadIcon} />
          {' '}
          Download
        </Text>
      </Pressable>
    </View>
  );
};

export default MovieDetailsScreen;
