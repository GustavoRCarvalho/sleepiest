import React from 'react';
import {Image, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import image from '../../assets/images/1330761.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DEFAULT_IMAGE = Image.resolveAssetSource(image).uri;

export const Loading = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.backgroundImage}>
      <Image style={styles.Image} source={{uri: DEFAULT_IMAGE}} />
      <Icon name="sleep" size={80} />
      <Text style={styles.Text}>Sleepiest</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    backgroundColor: '#aaa',
    width: '100%',
    height: '100%',

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
    fontSize: 40,
  },
});
