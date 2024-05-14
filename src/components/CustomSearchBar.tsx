import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {COLOR, FONT} from 'constants/theme';

import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

interface CustomSearchBarProps {
  isAutoFocus?: boolean;
  text?: string;
  onPress:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  isAutoFocus = false,
  text,
  onPress,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (searchText: string) => {
    setSearchQuery(searchText);
  };

  return (
    <SearchBar
      placeholder="Search address, or near you"
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={styles.searchBarInputContainer}
      leftIconContainerStyle={styles.leftIconContainerStyle}
      onChangeText={handleSearchChange}
      value={text ?? searchQuery}
      autoFocus={isAutoFocus}
      onSubmitEditing={onPress}
    />
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: COLOR.color60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR.line,
    width: '100%',
  },
  searchBarInputContainer: {
    backgroundColor: COLOR.color60,
    borderRadius: 10,
  },
  leftIconContainerStyle: {
    width: 20,
  },
});
