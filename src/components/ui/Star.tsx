import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconContainer from './IconContainer';
import {COLOR} from 'constants/theme';

const Star = ({available, isHalf = false}) => {
  return (
    <View>
      <IconContainer
        icon={available ? (isHalf ? 'star-half-stroke' : 'star') : 'star'}
        size={16}
        isSolid
        color={available ? COLOR.star : COLOR.nostar}
        isButton={false}
      />
    </View>
  );
};

export default Star;
