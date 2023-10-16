import React, {useEffect, useState} from 'react';
import {Animated, ScrollView, StyleSheet, View} from 'react-native';
import {Loading} from './Loading';
import {StorieCard} from '../cards/StorieCard';
import {StoriesCardsList} from '../../data/StoriesCardsList';
import {StoriesInfo} from '../player/StoriesInfos';

export const Home = () => {
  const [transition, setTransition] = useState(1);
  const [isPlayerOpen, setIsPlayerOpen] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTransition(0);
    }, 1000);
  }, []);

  console.log(isPlayerOpen);

  return (
    <Animated.View style={Styles.controlBackground}>
      <Loading transition={transition} />
      <ScrollView contentContainerStyle={Styles.containerScrollView}>
        <View style={Styles.listCards}>
          {StoriesCardsList.map(({title, time, src}) => (
            <StorieCard
              key={title}
              title={title}
              time={time}
              src={src}
              isPlayerOpen={isPlayerOpen}
              setIsPlayerOpen={setIsPlayerOpen}
            />
          ))}
        </View>
      </ScrollView>
      <StoriesInfo isOpen={isPlayerOpen} setIsPlayerOpen={setIsPlayerOpen} />
    </Animated.View>
  );
};

const Styles = StyleSheet.create({
  controlBackground: {
    backgroundColor: '#1d1331',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  containerScrollView: {
    flexGrow: 1,
  },
  listCards: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'start',
    alignContent: 'center',

    width: '100%',

    gap: 20,
    padding: 20,
  },
});
