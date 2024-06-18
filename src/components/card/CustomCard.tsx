import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {COLOR, FONT} from 'constants/theme';
import FastImage from 'react-native-fast-image';
import TextHighlight from 'components/ui/TextHighlight';
import {calculatePriceRange, getMitraTimeRange} from 'utils/helper';
import {Mitra} from 'utils/type';
import {useMitraContext} from 'stores/mitra/MitraContext';
import {filterSliders} from 'constants/default';

type Card = {
  isHorizontal: boolean;
  navigation: any;
  mitras: Mitra[] | undefined;
};

const CustomCard: React.FC<Card> = (props: Card) => {
  const {mitras: contextMitras} = useMitraContext();
  const {mitras = []} = props;
  const effectiveMitras = mitras.length > 0 ? mitras : contextMitras;

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
          {effectiveMitras.map((mitra: Mitra) => {
            const {openTime, closeTime} = getMitraTimeRange(
              mitra.schedule,
              new Date(),
            );
            const timeRange = openTime + ' - ' + closeTime;
            const priceRange = calculatePriceRange(mitra.products);
            return (
              <Pressable
                style={styles.mitraCard}
                key={mitra.id}
                onPress={() =>
                  props.navigation.navigate('Product Detail', {id: mitra.id})
                }>
                <FastImage
                  source={{
                    uri: mitra?.image,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.web,
                  }}
                  style={styles.mitraImage}
                />
                <View style={styles.mitraDetails}>
                  <Text style={FONT.title}>{mitra.name}</Text>
                  <TextHighlight mitra={mitra}>
                    <Text style={styles.identifier}>{timeRange}</Text>
                  </TextHighlight>
                  <Text style={styles.identifier}>💲{priceRange}</Text>
                </View>
              </Pressable>
            );
          })}
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
  mitraCard: {
    borderRadius: 10,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  identifier: FONT.identifier,
});
