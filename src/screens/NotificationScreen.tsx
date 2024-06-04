import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLOR, FONT} from 'constants/theme';
import CustomChecklist from 'components/CustomCheckbox';

const NotificationScreen = ({navigation}) => {
  const [keywords, setKeywords] = useState<string>('');

  const handleKeywordPress: any = (keywordText: string) => {
    setKeywords(keywordText);
  };

  const handleSearchPress: any = () => {
    navigation.navigate('Product List');
  };

  return <View style={styles.container}></View>;
};

export default NotificationScreen;

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
