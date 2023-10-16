import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const StoriesInfo = ({isOpen, setIsPlayerOpen}) => {
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
      <Icon name="close" style={Styles.icon} onTouchEnd={onClose} />
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  container: isOpen => ({
    position: 'absolute',
    display: isOpen ? 'flex' : 'none',
    backgroundColor: '#3a1757',
    width: '100%',
    height: '100%',
  }),
  icon: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    color: '#111',
    borderRadius: 100,
    fontSize: 21,
    padding: 10,

    right: 10,
    top: 10,
  },
});
