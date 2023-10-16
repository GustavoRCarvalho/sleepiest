import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import image from '../../assets/images/1330761.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const DEFAULT_IMAGE = Image.resolveAssetSource(image).uri;

export const Loading = ({transition}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const fadeAnim = useRef(new Animated.Value(transition)).current;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: transition,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [transition, fadeAnim]);

  return (
    <Animated.View
      style={{
        ...styles.backgroundImage,
        height: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['30%', '100%'],
        }),
      }}>
      <Image style={styles.Image} source={{uri: DEFAULT_IMAGE}} />
      <Animated.View style={{...styles.infoContainer, opacity: fadeAnim}}>
        <AnimatedIcon
          name="sleep"
          size={80}
          style={{
            fontSize: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 80],
            }),
          }}
        />
        <Animated.Text
          style={{
            ...styles.Text,
            fontSize: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 50],
            }),
          }}>
          Sleepiest
        </Animated.Text>
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
