import {StyleProp, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLOR} from 'constants/theme';

interface LineProp {
  type: 'horizontal' | 'vertical';
  style?: StyleProp<any>;
}

const CustomLine = (props: LineProp) => {
  return (
    <View
      style={[
        props.type === 'horizontal' ? styles.horizontal : styles.vertical,
        props.style,
      ]}
    />
  );
};

export default CustomLine;

const styles = StyleSheet.create({
  horizontal: {
    borderBottomColor: COLOR.line,
    borderBottomWidth: 1,
  },
  vertical: {
    width: 1,
    height: '100%',
    backgroundColor: COLOR.line,
  },
});
