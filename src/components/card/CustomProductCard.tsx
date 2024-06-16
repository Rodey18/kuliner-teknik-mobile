import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLOR, FONT} from 'constants/theme';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FastImage from 'react-native-fast-image';
import {Product} from 'utils/type';

type ProductCard = {
  navigation: any;
  product: Product;
};

const CustomProductCard = (prop: ProductCard) => {
  const [isFavorit, setIsFavorit] = useState(false);

  const handleFavorit = () => {
    setIsFavorit(!isFavorit);
  };

  return (
    <Pressable style={styles.mitraCard} key={prop.product.id}>
      <FastImage
        source={{
          uri: prop.product.image,
          priority: FastImage.priority.high,
          cache: FastImage.cacheControl.web,
        }}
        style={styles.mitraImage}
      />
      <View style={styles.mitraDetails}>
        <Text style={FONT.subtitle}>{prop.product.name}</Text>
        <Text style={FONT.identifier}>{prop.product.desc}</Text>
        <Text style={styles.identifier}>Rp{prop.product.price}</Text>
      </View>
      <FontAwesome6Icon
        size={24}
        name="heart"
        onPress={handleFavorit}
        solid={isFavorit === true}
        style={styles.heart}
      />
    </Pressable>
  );
};

export default CustomProductCard;

const styles = StyleSheet.create({
  mitraCard: {
    borderRadius: 10,
    flexDirection: 'row',
    height: 100,
  },
  mitraImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  mitraDetails: {
    marginLeft: 10,
    flex: 1,
    gap: 4,
  },
  identifier: FONT.identifier,
  heart: {
    alignSelf: 'center',
    color: COLOR.red,
  },
});
