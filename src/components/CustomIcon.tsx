import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface CustomIconProps {
  route: string;
  iconName: string;
  label: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({route, iconName, label}) => {
  const navigation = useNavigation();

  const handleIconPress = () => {
    navigation.navigate(route as never); // Replace 'Profile' with your actual screen name
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleIconPress}
      accessibilityLabel={label}>
      <FontAwesome6Icon
        name={iconName}
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

export default CustomIcon;
