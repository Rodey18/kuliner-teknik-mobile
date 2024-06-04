import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {COLOR, FONT} from 'constants/theme';
import FastImage from 'react-native-fast-image';
import {filterSliders} from 'data/dummy';
import {useRestaurantContext} from 'stores/restaurant/RestaurantContext';

type Card = {
  isHorizontal: boolean;
  navigation: any;
};

const CustomCard: React.FC<Card> = (props: Card) => {
  const {restaurants} = useRestaurantContext();

  return (
    <>
      {props.isHorizontal === true ? (
        <View style={styles.container}>
          {filterSliders.map((filter, index) => {
            return (
              <Pressable
                key={index}
                style={styles.cardContainer}
                onPress={() =>
                  props.navigation.navigate('Product List', {
                    keyword: filter.text,
                  })
                }>
                <View style={styles.imageContainer}>
                  {typeof filter.image === 'string' ? (
                    <FastImage
                      source={{
                        uri: filter.image,
                        priority: FastImage.priority.high,
                        cache: FastImage.cacheControl.web,
                      }}
                      style={styles.image}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  ) : (
                    <Image source={filter.image} style={styles.image} />
                  )}
                </View>

                <Text style={styles.identifier}>{filter.text}</Text>
              </Pressable>
            );
          })}
        </View>
      ) : (
        <>
          {restaurants.map(restaurant => (
            <Pressable
              style={styles.restaurantCard}
              key={restaurant.id}
              onPress={() =>
                props.navigation.navigate('Product Detail', {id: restaurant.id})
              }>
              <Image source={restaurant.image} style={styles.restaurantImage} />
              <View style={styles.restaurantDetails}>
                <Text style={FONT.title}>{restaurant.name}</Text>
                <Text style={styles.identifier}>🕰️ {restaurant.hours}</Text>
                <Text style={styles.identifier}>💲{restaurant.priceRange}</Text>
              </View>
            </Pressable>
          ))}
        </>
      )}
    </>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: COLOR.color60,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantCard: {
    borderRadius: 10,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  identifier: FONT.identifier,
});
