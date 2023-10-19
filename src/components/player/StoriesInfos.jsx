import React, {useEffect, useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import imageDefault from '../../assets/images/1330761.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(imageDefault).uri;

export const StoriesInfo = ({openMusic, isOpen, setIsPlayerOpen}) => {
  const {
    title = '',
    time = 0,
    image = DEFAULT_IMAGE,
    about = '',
    author = '',
    audioFile = '',
  } = openMusic;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isOpen,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOpen, fadeAnim]);

  function onClose() {
    setIsPlayerOpen(0);
  }

  return (
    <Animated.View
      style={{
        ...Styles.container(isOpen),
        opacity: fadeAnim,
      }}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>{title}</Text>
        <Icon name="close" style={Styles.icon} onTouchEnd={onClose} />
      </View>
      <View style={Styles.imageContainer}>
        <Image source={{uri: image}} style={Styles.image} />
      </View>
      <Text>{title}</Text>
      <Text>{time}</Text>
      <Text>{about}</Text>
      <Text>{author}</Text>
      <Text>{audioFile}</Text>
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  container: isOpen => ({
    position: 'absolute',
    display: isOpen ? 'flex' : 'none',
    backgroundColor: '#180e46',
    width: '100%',
    height: '100%',
  }),
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 15,
  },
  imageContainer: {
    width: '100%',
    height: '30%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: '100%',

    borderRadius: 25,
  },
  icon: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    color: '#111',
    borderRadius: 100,
    fontSize: 21,
    padding: 6,

    right: 10,
  },
});
