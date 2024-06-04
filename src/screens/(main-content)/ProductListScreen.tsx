import React from 'react';
import LayoutSearchBar from 'components/searchbar/LayoutSearchBar';

const ProductListScreen = ({navigation, route}) => {
  const {keyword} = route.params;

  return (
    <LayoutSearchBar type={'list'} navigation={navigation} keyword={keyword} />
  );
};

export default ProductListScreen;
