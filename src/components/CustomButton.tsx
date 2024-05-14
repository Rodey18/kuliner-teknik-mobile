import {COLOR, FONT} from 'constants/theme';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type buttonProps = {
  title: string;
  type: 'go' | 'cancel';
  isDisable: boolean;
  onPress: () => void;
};

const CustomButton = (props: buttonProps) => {
  return (
    <>
      {props.type === 'go' ? (
        <TouchableOpacity
          style={[styles.buttonGo, props.isDisable && styles.disabledButton]}
          onPress={props.onPress}
          disabled={props.isDisable}>
          <Text style={styles.textGo}>{props.title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonCancel} onPress={props.onPress}>
          <Text style={styles.textCancel}>{props.title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonGo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: COLOR.color10,
    borderRadius: 100,
  },
  buttonCancel: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 100,
    borderColor: COLOR.red,
    borderWidth: 0.5,
    backgroundColor: COLOR.color60,
  },
  textGo: {
    ...FONT.subtitle,
    color: COLOR.color60,
  },
  textCancel: {
    ...FONT.subtitle,
    color: COLOR.red,
  },
  disabledButton: {
    backgroundColor: '#bdc3c7',
  },
});
