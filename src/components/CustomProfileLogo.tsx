import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome';

const CustomProfileLogo = ({onPress}: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      accessibilityLabel="User Profile">
      <FontAwesome6Icon
        name="user"
        size={24}
        color="black"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    padding: 8,
  },
});

export default CustomProfileLogo;
