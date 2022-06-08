import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import { Episode } from '../../types';
import styles from './styles';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const video = useRef();
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: episode.video }}
        posterSource={{ uri: episode.poster }}
        usePoster
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
