import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomSearchBar from './CustomSearchBar';
import {COLOR, FONT} from 'constants/theme';
import {searchHistory} from 'data/dummy';
import {ColorWithOpacity} from 'utils/helper';
import CustomCardContainer from 'components/card/CustomCardContainer';

const LayoutSearchBar = ({navigation, type, keyword}) => {
  const [keywords, setKeywords] = useState<string>(keyword);

  const handleKeywordPress = (keywordText: string) => {
    setKeywords(keywordText);
    handleSearchPress(keywordText);
  };

  const handleSearchPress: any = (keywordText: string) => {
    navigation.navigate('Product List', {keyword: keywordText});
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomSearchBar
          isAutoFocus={true}
          text={keywords}
          onPress={handleSearchPress}
        />
      </View>
      {type === 'list' ? (
        <CustomCardContainer
          navigation={navigation}
          isHorizontal={false}
          showIndicator={false}
        />
      ) : (
        <>
          <View style={styles.branch}>
            <Text style={FONT.title}>Pencarian Terakhir</Text>
            <View style={styles.itemContainer}>
              {searchHistory.map((keywordText, index) => (
                <Text
                  key={index}
                  style={styles.filter}
                  onPress={() => handleKeywordPress(keywordText)}>
                  {keywordText}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.branch}>
            <Text style={FONT.title}>Pencarian Populer</Text>
            <View style={styles.itemContainer}>
              <View style={styles.itemContainer}>
                {searchHistory.map((keywordText, index) => {
                  return (
                    <Text
                      key={index}
                      style={styles.filter}
                      onPress={() => {
                        handleKeywordPress(keywordText);
                      }}>
                      {keywordText}
                    </Text>
                  );
                })}
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default LayoutSearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: COLOR.color60,
    gap: 16,
    height: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  filter: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: ColorWithOpacity(COLOR.color10, 0.25),
    color: COLOR.color10,
    borderRadius: 8,
    alignItems: 'center',
  },
  branch: {
    gap: 16,
  },
});
