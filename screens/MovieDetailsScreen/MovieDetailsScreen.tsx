import React, { useState } from 'react';
import { Image, Pressable, FlatList } from 'react-native';
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { View, Text } from '../../components/Themed';

import movie from '../../assets/data/movie';
import styles from './styles';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const seasonsNames = movie.seasons.items.map((item) => item.name);

  return (
    <View>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View>
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
            <Pressable
              onPress={() => console.warn('Play')}
              style={styles.playBtn}
            >
              <Text style={styles.playBtnText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>
            {/* Download button */}
            <Pressable
              onPress={() => console.warn('Download')}
              style={styles.downloadBtn}
            >
              <Text style={styles.downloadBtnText}>
                <Octicons
                  name="download"
                  size={16}
                  color="white"
                  style={styles.downloadIcon}
                />{' '}
                Download
              </Text>
            </Pressable>
            <Text style={styles.plot}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with icon buttons */}
            <View style={styles.iconRow}>
              <View style={styles.plusIcon}>
                <AntDesign name="plus" size={20} color="white" />
                <Text style={styles.iconText}>My List</Text>
              </View>
              <View style={styles.plusIcon}>
                <SimpleLineIcons name="like" size={20} color="white" />
                <Text style={styles.iconText}>My List</Text>
              </View>
              <View style={styles.plusIcon}>
                <Feather name="send" size={24} color="white" />
                <Text style={styles.iconText}>My List</Text>
              </View>
            </View>

            {/* For picking seasons */}
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              style={styles.picker}
              dropdownIconColor="white"
            >
              {seasonsNames.map((season) => (
                <Picker.Item label={season} value={season} />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
