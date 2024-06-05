import {StyleSheet, View} from 'react-native';
import React from 'react';

const Header = ({children}: any) => {
  return <View style={styles.headerContainer}>{children}</View>;
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
});
