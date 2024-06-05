import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useRestaurantContext} from 'stores/restaurant/RestaurantContext';
import ProductDetailHeader from 'components/header/ProductDetailHeader';
import {COLOR, CONTAINER, FONT} from 'constants/theme';
import {Image} from 'react-native-elements';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import CustomProductCard from 'components/card/CustomProductCard';
import CustomLine from 'components/CustomLine';
import OpenURLButton from 'components/button/OpenURLButton';
import {defaultRestaurant} from 'constants/default';
import OperationalTimeModal from 'components/modal/OperationalTimeModal';

const ProductDetailScreen = ({navigation, route}: any) => {
  const {id} = route.params;
  const {restaurants} = useRestaurantContext();
  const [scrollY, setScrollY] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const restaurant = restaurants.find(r => r.id === id) ?? defaultRestaurant;

  const isOpen = restaurant?.isOpen === true ? 'Buka' : 'Tutup';
  const products = restaurant?.foods;

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
        ]}>
        {/* Your header content */}
      </ProductDetailHeader>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={styles.imgContainer}>
          <Image source={restaurant?.image} style={styles.restaurantImage} />
        </View>
        <View style={styles.restaurantContainer}>
          <Text style={FONT.title}>{restaurant?.name}</Text>
          <View style={styles.viewContainer}>
            <FontAwesome6Icon size={24} name="star" solid color={COLOR.star} />
            <View>
              <Text style={FONT.subtitle}>{restaurant?.rating}</Text>
              <Text style={[FONT.subtitle, styles.textSeeReview]}>
                Lihat ulasan
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.data}>
          <OpenURLButton url={restaurant.name}>
            <FontAwesome6Icon
              size={24}
              name="location-dot"
              color={COLOR.color30}
            />
            <Text style={FONT.identifier}>{restaurant?.address.text}</Text>
          </OpenURLButton>
          <FontAwesome6Icon
            size={12}
            name="chevron-right"
            color={COLOR.color30}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.data} onPress={toggleModal}>
            <View style={styles.viewContainer}>
              <FontAwesome6Icon size={20} name="clock" color={COLOR.color30} />
              <Text style={FONT.identifier}>
                <Text style={{color: COLOR.green}}>{isOpen}</Text>{' '}
                {restaurant?.hours}
              </Text>
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
            id={id}
          />
        </View>
        <View style={styles.data}>
          <View style={styles.viewContainer}>
            <FontAwesome6Icon size={24} name="whatsapp" color={COLOR.color30} />
            <Text style={FONT.identifier}>{restaurant?.whatsapp.number}</Text>
            <CustomLine type={'vertical'} />
            <Text style={FONT.identifier}>Join Group</Text>
          </View>
          <FontAwesome6Icon
            size={12}
            name="chevron-right"
            color={COLOR.color30}
          />
        </View>
        <View style={CONTAINER.flexgap16}>
          <Text style={FONT.title}>Menu</Text>
          {products?.map(product => (
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
  scrollContainer: {
    paddingBottom: 24,
  },
  scrollContent: {
    gap: 16,
    paddingHorizontal: 32,
    paddingTop: 266,
    paddingBottom: 24,
  },
  restaurantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  textSeeReview: {
    color: COLOR.color10,
  },
  data: {
    ...CONTAINER.flexrow,
    gap: 8,
    justifyContent: 'space-between',
    height: 45,
  },
});
