import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomSearchBar from 'components/CustomSearchBar';
import {COLOR, FONT} from 'constants/theme';

const dataSearch = ['nasi isan', 'sayur mayur', 'kol berbahaya'];

const SearchScreen = ({navigation}) => {
  const [keywords, setKeywords] = useState<string>('');

  const handleKeywordPress: any = (keywordText: string) => {
    setKeywords(keywordText);
  };

  const handleSearchPress: any = () => {
    navigation.navigate('Product List');
  };

  return (
    <View style={styles.container}>
      <CustomSearchBar
        isAutoFocus={true}
        text={keywords}
        onPress={handleSearchPress}
      />
      <View>
        <Text style={FONT.title}>Pencarian Terakhir</Text>
        <View style={styles.itemContainer}>
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
      <View>
        <Text style={FONT.title}>Pencarian Populer</Text>
        <View style={styles.itemContainer}>
          <View style={styles.itemContainer}>
            {dataSearch.map((keyword, index) => {
              return (
                <Text
                  key={index}
                  style={styles.filter}
                  onPress={() => handleKeywordPress(keyword)}>
                  {keyword}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: COLOR.color60,
    height: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  filter: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLOR.gray,
    color: COLOR.color10,
  },
});
