import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomSearchBar from 'components/CustomSearchBar';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {COLOR, ICON} from 'constants/theme';

const dataSearch = ['nasi isan', 'sayur mayur', 'kol berbahaya'];

const ProductListHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FontAwesome6Icon name="arrow-left" style={ICON.icon24} />
        <CustomSearchBar />
      </View>
      <View>
        {dataSearch.map((keyword, index) => (
          <Text
            key={index}
            style={styles.filter}
            onPress={() => handleKeywordPress(keyword)}>
            {keyword}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ProductListHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  top: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  bottom: {},
  filter: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLOR.gray,
    color: COLOR.color10,
  },
});
