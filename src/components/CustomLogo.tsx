import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {CONTAINER, IMG} from 'constants/theme';

const CustomLogo = () => {
  return (
    <View style={CONTAINER.flexbox}>
      <View style={IMG.logo}>
        <Image source={require('assets/img/logo_kulinerteknik.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomLogo;
