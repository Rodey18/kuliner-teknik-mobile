import {StyleSheet, View} from 'react-native';
import React from 'react';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {COLOR, CONTAINER} from 'constants/theme';
import CustomSearchBar from 'components/CustomSearchBar';
import CustomIcon from 'components/CustomIcon';

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.headerLeft}
        onTouchEnd={() => navigation.navigate('Search Product')}>
        <CustomSearchBar isAutoFocus={false} onPress={undefined} />
      </View>
      <View style={styles.headerRight}>
        <CustomIcon
          iconName="bell"
          route="Notification"
          label="Notification"></CustomIcon>
        <CustomIcon
          iconName="user"
          route="Profile"
          label="User Profile"></CustomIcon>
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
