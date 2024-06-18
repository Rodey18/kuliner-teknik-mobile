'use client';

import React from 'react';
import Star from './Star';
import {StyleSheet, View} from 'react-native';

const createArray = (length: number) => Array.from({length});

function StarIndicator({StarNumber = 5}) {
  const [integerStars, decimalStar] = StarNumber.toString()
    .split('.')
    .map(Number);
  const totalStars = createArray(5);

  return (
    <View style={styles.container}>
      {totalStars.map((_, i) => {
        if (i < integerStars) {
          return <Star key={i} available={true} />;
        } else if (i === integerStars && decimalStar > 0) {
          return <Star key={i} available={true} isHalf={true} />;
        } else {
          return <Star key={i} available={false} />;
        }
      })}
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
