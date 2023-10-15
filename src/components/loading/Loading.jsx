import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import image from '../../assets/images/1330761.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DEFAULT_IMAGE = Image.resolveAssetSource(image).uri;

export const Loading = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [opacity, setOpacity] = useState(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function handleFade() {
    setOpacity(state => (state === 1 ? 0 : 1));
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: opacity,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [opacity, fadeAnim]);

  return (
    <Animated.View
      style={{
        ...styles.backgroundImage,
        height: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['50%', '100%'],
        }),
      }}
      onTouchEnd={handleFade}>
      <Image style={styles.Image} source={{uri: DEFAULT_IMAGE}} />
      <Animated.View style={{...styles.infoContainer, opacity: fadeAnim}}>
        <Icon name="sleep" size={80} />
        <Text style={styles.Text}>Sleepiest</Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    backgroundColor: '#aaa',
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    position: 'relative',
    width: '100%',
    height: '50%',
    opacity: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  Text: {
    fontSize: 50,
    fontFamily: 'PatrickHand-Regular',
  },
});
