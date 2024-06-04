import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {COLOR} from 'constants/theme';
import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

interface CustomSearchBarProps {
  isAutoFocus?: boolean;
  text?: string;
  onPress?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
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

  const handleSearchPress = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    if (searchQuery.trim()) {
      onPress?.(e);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Cari alamat di sekitar"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        onChangeText={handleSearchChange}
        value={text || searchQuery}
        autoFocus={isAutoFocus}
        onSubmitEditing={handleSearchPress}
      />
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 1,
  },
  searchBarContainer: {
    backgroundColor: COLOR.color60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLOR.line,
  },
  searchBarInputContainer: {
    backgroundColor: COLOR.color60,
    borderRadius: 10,
  },
  leftIconContainerStyle: {
    width: 20,
  },
});
