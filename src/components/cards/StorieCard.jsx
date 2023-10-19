import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const StorieCard = ({
  title,
  time,
  image,
  onClick,
  isPlayerOpen,
  setIsPlayerOpen,
}) => {
  const [isOpen, setIsOpen] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isOpen,
      duration: 250,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeAnim2, {
      toValue: isPlayerOpen,
      duration: 1000,
      delay: 250,
      useNativeDriver: false,
    }).start();
  }, [isOpen, isPlayerOpen, fadeAnim, fadeAnim2]);

  useEffect(() => {
    if (isPlayerOpen === 1) {
      setTimeout(() => {
        setIsOpen(0);
      }, 1250);
    }
  }, [isPlayerOpen]);

  function handleOpen() {
    setIsPlayerOpen(1);
    setIsOpen(state => (state === 1 ? 0 : 1));
    onClick();
  }

  return (
    <View style={Styles.cardContainer} onTouchEnd={handleOpen}>
      <Animated.Image
        src={image}
        style={{
          ...Styles.image,
          borderRadius: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 15],
          }),
          margin: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 5],
          }),
        }}
      />
      <View style={Styles.infoWrapper}>
        <View>
          <Text>{title}</Text>
          <Text style={Styles.textTime}>{time} Min.</Text>
        </View>
        <Icon name="controller-play" style={Styles.icon} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#230e5e',
    width: 160,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  image: {
    flex: 1,
  },
  icon: {
    fontSize: 25,
    color: 'white',
    backgroundColor: '#ff8800',
    borderRadius: 100,
    paddingLeft: 3,
    paddingVertical: 1,
  },
  textTime: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
