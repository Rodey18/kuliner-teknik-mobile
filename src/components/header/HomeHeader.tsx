import {StyleSheet, View} from 'react-native';
import React from 'react';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {COLOR, CONTAINER} from 'constants/theme';
import CustomSearchBar from 'components/searchbar/CustomSearchBar';
import CustomProfileLogo from 'components/CustomProfileLogo';

const HomeHeader = ({navigation}: any) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.headerLeft}
        onTouchEnd={() => navigation.navigate('Search Product')}>
        <CustomSearchBar isAutoFocus={false} text="" />
      </View>
      <View style={styles.headerRight}>
        <FontAwesome6Icon name="bell" size={24} color="black" />
        <CustomProfileLogo onPress={handleProfilePress} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    ...CONTAINER.flexrow,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: COLOR.color60,
    borderBottomColor: COLOR.color10,
    borderBottomWidth: 1,
    gap: 16,
  },
  headerRight: {
    ...CONTAINER.flexrow,
    gap: 8,
    alignItems: 'center',
  },
  headerLeft: {
    ...CONTAINER.flexrow,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
});
