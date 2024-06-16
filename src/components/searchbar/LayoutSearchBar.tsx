import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomSearchBar from './CustomSearchBar';
import {COLOR, FONT} from 'constants/theme';
import {searchHistory} from 'data/dummy';
import {ColorWithOpacity} from 'utils/helper';
import CustomCardContainer from 'components/card/CustomCardContainer';
import {useMitraContext} from 'stores/mitra/MitraContext';
import {Mitra} from 'utils/type';

const LayoutSearchBar = ({navigation, type, keyword}) => {
  const {mitras} = useMitraContext();
  const [keywords, setKeywords] = useState<string>(keyword);
  const [filteredMitras, setFilteredMitras] = useState<Mitra[]>([]);

  const handleKeywordPress = (keywordText: string) => {
    setKeywords(keywordText);
    handleSearchPress(keywordText);
  };

  const handleSearchPress: any = (keywordText: string) => {
    const filtered = mitras.filter(mitra =>
      mitra.name.toLowerCase().includes(keywordText.toLowerCase()),
    );
    setFilteredMitras(filtered);
    navigation.navigate('Product List', {keyword: keywordText});
  };

  useEffect(() => {
    if (keyword.length > 0) {
      handleSearchPress(keyword);
    }
  }, [keyword]);

  console.log(filteredMitras.length === 0);
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
        <>
          {filteredMitras.length === 0 ? (
            <Text style={styles.noticeText}>
              Restaurant tidak ditemukan! Silakan cari lagi atau melihat list
              dibawah.
            </Text>
          ) : (
            ''
          )}
          <CustomCardContainer
            navigation={navigation}
            isHorizontal={false}
            showIndicator={false}
            mitras={filteredMitras}
          />
        </>
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
  noticeText: {
    textAlign: 'center',
    marginBottom: 10,
    ...FONT.detail,
  },
});
