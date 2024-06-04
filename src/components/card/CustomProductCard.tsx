import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native-elements';
import {COLOR, FONT} from 'constants/theme';
import {Food} from 'utils/type';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {priceConverter} from 'utils/helper';

type ProductCard = {
  navigation: any;
  product: Food;
};

const CustomProductCard = (prop: ProductCard) => {
  const [isFavorit, setIsFavorit] = useState(prop.product.favorit);

  const handleFavorit = () => {
    setIsFavorit(!isFavorit);
  };

  return (
    <Pressable
      style={styles.restaurantCard}
      key={prop.product.id}
      onPress={() =>
        prop.navigation.navigate('Product Detail', {id: prop.product.id})
      }>
      <Image source={prop.product.image} style={styles.restaurantImage} />
      <View style={styles.restaurantDetails}>
        <Text style={FONT.subtitle}>{prop.product.name}</Text>
        <Text style={FONT.identifier}>{prop.product.desc}</Text>
        <Text style={styles.identifier}>
          Rp{priceConverter(prop.product.price)}
        </Text>
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
  restaurantCard: {
    borderRadius: 10,
    flexDirection: 'row',
    height: 100,
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  restaurantDetails: {
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
