import {StyleSheet, View} from 'react-native';
import React from 'react';
import IconContainer from './IconContainer';
import {COLOR} from 'constants/theme';

const Star = ({available}) => {
  return (
    <View>
      {available ? (
        <IconContainer
          icon="star"
          size={16}
          isSolid
          color={COLOR.star}
          isButton={false}
        />
      ) : (
        <IconContainer
          icon="star"
          size={16}
          isSolid
          color={COLOR.nostar}
          isButton={false}
        />
      )}
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({});
