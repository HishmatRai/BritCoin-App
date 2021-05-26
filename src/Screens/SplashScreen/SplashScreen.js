import * as React from 'react';
import { View, StyleSheet,  } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function SplashScreen(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  setTimeout(() => {
    props.navigation.navigate("Select");
  }, 8000);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("./../../Videos/SplashScreenIntro.mp4")}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        muted={true}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
