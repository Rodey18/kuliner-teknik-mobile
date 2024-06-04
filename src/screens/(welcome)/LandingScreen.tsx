import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomLogo from 'components/CustomLogo';
import CustomButton from 'components/CustomButton';
import {COLOR, CONTAINER, FONT} from 'constants/theme';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <CustomLogo />
      <View style={styles.header}>
        <Image source={require('assets/img/footage.png')} />
        <Text style={styles.title}>
          Temukan Cita Rasa Baru di Sekitar Kampus Teknik Universitas
          Hasanuddin, Gowa
        </Text>
        <Text style={styles.content}>
          Jelajahi ragam kuliner yang menggugah selera dan nikmati pengalaman
          makan yang tak terlupakan!
        </Text>
      </View>
      <View style={styles.container}>
        <CustomButton
          title="Daftar"
          isDisable={false}
          type="go"
          onPress={() => navigation.navigate('Sign Up')}
        />
        <CustomButton
          title="Masuk"
          isDisable={false}
          type="go"
          onPress={() => navigation.navigate('Sign In')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLOR.color60,
    padding: 24,
    gap: 24,
  },
  header: {
    ...CONTAINER.flexbox,
    gap: 24,
  },
  container: {
    ...CONTAINER.flexgap16,
  },
  title: {
    ...FONT.title,
    color: COLOR.color30,
    textAlign: 'center',
  },
  content: {
    ...FONT.content,
    color: COLOR.color30,
    textAlign: 'center',
  },
});

export default LandingScreen;
