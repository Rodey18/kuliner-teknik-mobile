import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ProductDetailHeader from 'components/header/ProductDetailHeader';
import {COLOR, CONTAINER, FONT} from 'constants/theme';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import CustomProductCard from 'components/card/CustomProductCard';
import CustomLine from 'components/CustomLine';
import OpenURLButton from 'components/button/OpenURLButton';
import OperationalTimeModal from 'components/modal/OperationalTimeModal';
import {getMitraTimeRange, handleCopyToClipboard} from 'utils/helper';
import {Mitra, Product} from 'utils/type';
import {useMitraContext} from 'stores/mitra/MitraContext';
import {defaultMitra} from 'constants/default';
import FastImage from 'react-native-fast-image';
import TextHighlight from 'components/ui/TextHighlight';

const ProductDetailScreen = ({navigation, route}: any) => {
  const {id} = route.params;
  const {mitras} = useMitraContext();
  const [scrollY, setScrollY] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const mitra: Mitra = mitras.find(r => r.id === id) ?? defaultMitra;
  const products = mitra?.products;

  const {openTime, closeTime} = getMitraTimeRange(mitra.schedule, new Date());
  const timeRange = openTime + ' - ' + closeTime;

  const handleScroll = (event: any) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={styles.container}>
      <ProductDetailHeader
        navigation={navigation}
        styleHeader={[
          styles.headerContainer,
          scrollY > 250 && styles.headerScrolled,
        ]}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={styles.imgContainer}>
          <FastImage
            source={{
              uri: mitra.image,
              priority: FastImage.priority.high,
              cache: FastImage.cacheControl.web,
            }}
            style={styles.restaurantImage}
          />
        </View>
        <View style={styles.restaurantContainer}>
          <Text style={FONT.title}>{mitra.name}</Text>
          <Pressable
            style={styles.viewContainer}
            onPress={() => navigation.navigate('Review', {mitra: mitra})}>
            <FontAwesome6Icon size={24} name="star" solid color={COLOR.star} />
            <View>
              <Text style={FONT.subtitle}>{mitra.rating}</Text>
              <Text style={styles.textButton}>Lihat ulasan</Text>
            </View>
          </Pressable>
        </View>
        <OpenURLButton
          url={`https://www.google.com/maps/search/${mitra.name}`}
          styles={styles.addressContainer}>
          <FontAwesome6Icon
            size={24}
            name="location-dot"
            color={COLOR.color30}
          />
          <Text style={styles.address}>{mitra?.address}</Text>
          <FontAwesome6Icon
            size={12}
            name="chevron-right"
            color={COLOR.color30}
          />
        </OpenURLButton>
        <TouchableOpacity
          style={[styles.data, styles.time]}
          onPress={toggleModal}>
          <View style={styles.viewContainer}>
            <FontAwesome6Icon size={20} name="clock" color={COLOR.color30} />
            <TextHighlight mitra={mitra}>
              <Text style={FONT.identifier}>{timeRange}</Text>
            </TextHighlight>
          </View>
          <FontAwesome6Icon
            size={12}
            name="chevron-right"
            color={COLOR.color30}
          />
        </TouchableOpacity>
        <OperationalTimeModal
          modalVisible={isModalVisible}
          onPress={toggleModal}
          mitra={mitra}
        />
        <View style={styles.data}>
          <FontAwesome6Icon size={24} name="whatsapp" color={COLOR.color30} />
          <TouchableOpacity
            onPress={() => handleCopyToClipboard(mitra?.whatsapp)}>
            <Text style={FONT.identifier}>{mitra?.whatsapp}</Text>
          </TouchableOpacity>
          <CustomLine type={'vertical'} />
          <OpenURLButton
            url="https://chat.whatsapp.com/F7OdlA7yy8Q3totYcRBLrX"
            styles={styles.joinCommunity}>
            <Text style={styles.textButton}>Join Community</Text>
          </OpenURLButton>
        </View>
        <View style={styles.listMenu}>
          <Text style={FONT.title}>Menu</Text>
          {products?.map((product: Product) => (
            <CustomProductCard
              key={product.id}
              navigation={navigation}
              product={product}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.color60,
    height: '100%',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 9999,
  },
  headerScrolled: {
    backgroundColor: COLOR.color60,
  },
  scrollContent: {
    paddingTop: 266,
    paddingBottom: 24,
  },
  restaurantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 32,
  },
  imgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  restaurantImage: {
    width: '100%',
    height: 250,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    height: '100%',
  },
  textButton: {
    ...FONT.subtitle,
    color: COLOR.color10,
  },
  data: {
    ...CONTAINER.flexrow,
    gap: 12,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  address: {
    ...FONT.identifier,
    flex: 1,
  },
  time: {
    justifyContent: 'space-between',
  },
  listMenu: {
    ...CONTAINER.flexgap16,
    paddingHorizontal: 32,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  joinCommunity: {
    height: '100%',
  },
});
