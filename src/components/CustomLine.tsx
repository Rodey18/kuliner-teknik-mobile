import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLOR} from 'constants/theme';

const CustomLine = () => {
  return <View style={styles.line} />;
};

export default CustomLine;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: COLOR.line,
    borderBottomWidth: 1,
  },
});
