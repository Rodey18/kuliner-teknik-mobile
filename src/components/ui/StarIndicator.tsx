'use client';

import React, {useState} from 'react';
import Star from './Star';
import {StyleSheet, View} from 'react-native';

const createArray = length => [...Array(length)];

function StarIndicator({StarNumber = 5}) {
  const [totalStars, setStars] = useState(StarNumber);
  return (
    <View style={styles.container}>
      {createArray(5).map((n, i) => (
        <Star key={i} available={i < totalStars} />
      ))}
    </View>
  );
}

export default StarIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
