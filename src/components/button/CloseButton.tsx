import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {COLOR} from 'constants/theme';

const CloseButton = ({onPress}) => {
  return (
    <Pressable style={[styles.button, styles.buttonClose]} onPress={onPress}>
      <FontAwesome6Icon name="xmark" size={24} />
    </Pressable>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    padding: 12,
  },
  buttonClose: {
    backgroundColor: COLOR.color60,
  },
});
