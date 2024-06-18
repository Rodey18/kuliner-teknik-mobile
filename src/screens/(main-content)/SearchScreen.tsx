import React from 'react';
import LayoutSearchBar from 'components/searchbar/LayoutSearchBar';

const SearchScreen = ({navigation}: any) => {
  return (
    <LayoutSearchBar
      type={'category'}
      navigation={navigation}
      keyword={''}
      placeholder={'Cari Warung / Makanan'}
    />
  );
};

export default SearchScreen;
