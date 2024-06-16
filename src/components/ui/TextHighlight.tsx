import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLOR, FONT} from 'constants/theme';
import {Mitra} from 'utils/type';

interface TextHighlightProps {
  mitra: Mitra;
  children?: any;
}

const TextHighlight = (props: TextHighlightProps) => {
  return props.mitra?.is_open === true ? (
    <Text style={styles.green}>Buka {props.children}</Text>
  ) : (
    <Text style={styles.red}>Tutup {props.children}</Text>
  );
};

export default TextHighlight;

const styles = StyleSheet.create({
  green: {
    ...FONT.identifier,
    color: COLOR.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    ...FONT.identifier,
    color: COLOR.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
