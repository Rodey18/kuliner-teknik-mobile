import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLOR, FONT} from 'constants/theme';
import CustomCard from 'components/CustomCard';

interface Restaurant {
  name: string;
  hours: string;
  priceRange: string;
  image: any;
}

const restaurants: Restaurant[] = [
  {
    name: 'Royal Crispy',
    priceRange: '10-13k',
    hours: '09:00 - 21:00',
    image: require('assets/img/resto_template.jpeg'), // Masukkan path gambar untuk setiap restoran
  },
  {
    name: 'Warung Mandiri',
    priceRange: '5k',
    hours: '08:00 - 22:00',
    image: require('assets/img/resto_template.jpeg'),
  },
  {
    name: 'Warung Alhamdulillah',
    priceRange: '10-13k',
    hours: '09:00 - 21:00',
    image: require('assets/img/resto_template.jpeg'),
  },
];

const HomeScreen: React.FC = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <CustomCard />
      <View style={styles.scrollView}>
        <View style={styles.bestForYouContainer}>
          <Text style={styles.title}>Best for You</Text>
          <TouchableOpacity onPress={() => console.log('See More pressed')}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
        {restaurants.map((restaurant, index) => (
          <TouchableOpacity
            style={styles.restaurantCard}
            key={index}
            onPress={() => navigation.navigate('Product Detail')}>
            <Image source={restaurant.image} style={styles.restaurantImage} />
            <View style={styles.restaurantDetails}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.subtitle}>🕰️ {restaurant.hours}</Text>
              <Text style={styles.subtitle}>💲{restaurant.priceRange}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLOR.color60,
  },
  scrollView: {
    marginTop: 10,
  },
  restaurantCard: {
    borderRadius: 10,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
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
  restaurantName: FONT.title,
  subtitle: FONT.identifier,
  title: FONT.title,
  bestForYouContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'middle',
    marginBottom: 10,
  },
  seeMoreText: FONT.identifier,
});

export default HomeScreen;
