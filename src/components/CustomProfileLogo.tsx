import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const CustomProfileLogo: React.FC = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('Profile'); // Replace 'Profile' with your actual screen name
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleProfilePress}
      accessibilityLabel="User Profile">
      <FontAwesome6Icon
        name="user"
        size={16}
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
