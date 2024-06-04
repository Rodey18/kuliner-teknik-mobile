import React from 'react';
import LayoutSearchBar from 'components/searchbar/LayoutSearchBar';

const SearchScreen = ({navigation}: any) => {
  return (
    <LayoutSearchBar type={'category'} navigation={navigation} keyword={''} />
  );
};

export default SearchScreen;
