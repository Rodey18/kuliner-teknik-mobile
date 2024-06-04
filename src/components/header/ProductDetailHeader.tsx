import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from './Header';
import IconContainer from 'components/ui/IconContainer';

const ProductDetailHeader = ({navigation, styleHeader}) => {
  // TODO: ubah state bookmark berdasarkan user
  const [isBookmark, setIsBookmark] = useState<boolean>(false);

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const handleBackNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={styleHeader}>
      <Header>
        <IconContainer
          icon="arrow-left"
          size={24}
          onPress={handleBackNavigation}
          isSolid={false}
        />
        <IconContainer
          icon="bookmark"
          size={24}
          onPress={handleBookmark}
          isSolid={isBookmark}
        />
      </Header>
    </View>
  );
};

export default ProductDetailHeader;

const styles = StyleSheet.create({});
