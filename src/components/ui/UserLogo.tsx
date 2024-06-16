import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {COLOR} from 'constants/theme';

const UserLogo = ({img}) => {
  return (
    <FastImage
      source={{
        uri: img,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.web,
      }}
      style={styles.rounded}
    />
  );
};

export default UserLogo;

const styles = StyleSheet.create({
  rounded: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: COLOR.gray,
  },
});
