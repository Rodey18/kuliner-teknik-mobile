import {COLOR, FONT} from 'constants/theme';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
} from 'react-native';

const CustomCard: React.FC = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {/* Card pertama */}
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('assets/img/resto_template.jpeg')}
            style={styles.image}
            imageStyle={styles.imageStyle}
          />
          <Text style={styles.subtitle}>Warung Sekitar</Text>
        </View>

        {/* Card kedua */}
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('assets/img/resto_template.jpeg')}
            style={styles.image}
            imageStyle={styles.imageStyle}
          />
          <Text style={styles.subtitle}>Rating Tertinggi</Text>
        </View>

        {/* Card ketiga */}
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require('assets/img/resto_template.jpeg')}
            style={styles.image}
            imageStyle={styles.imageStyle}
          />
          <Text style={styles.subtitle}>Jarak paling dekat</Text>
        </View>
      </View>
    </ScrollView>
  );
};

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
    backgroundColor: COLOR.color60, //putih
    borderRadius: 10, // Sudut bulat
    overflow: 'hidden', // Untuk memastikan teks tidak terpotong
    alignItems: 'center', // Pusatkan isi secara horizontal
    justifyContent: 'center', // Pusatkan isi secara vertikal
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center', // Teks berada di tengah secara vertikal
    alignItems: 'center', // Teks berada di tengah secara horizontal
  },
  imageStyle: {
    borderRadius: 10, // Sudut bulat untuk gambar
  },
  subtitle: {
    textAlign: 'center', // Teks berada di tengah
    padding: 5, // Padding teks
    ...FONT.title, // Gaya teks
    color: COLOR.color30, // Warna teks hitam
    fontSize: 16,
  },
});

export default CustomCard;
