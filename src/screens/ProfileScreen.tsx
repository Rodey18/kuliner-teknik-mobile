import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomLogo from 'components/CustomLogo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR, FONT} from 'constants/theme';
interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Kartu 1 */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => console.log('Kartu 1 ditekan')}>
        <View style={styles.cardTextContainer}>
          <CustomLogo />
          <View style={styles.cardDetailsContainer}>
            <Text style={styles.cardTitle}>Nasi Kuning Pojok, Gowa</Text>
            <Text style={styles.cardDetails}>085211234567</Text>
            <Text style={styles.cardDetails}>user@gmail.com</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Akun Saya */}
      <View style={styles.akunSayaContainer}>
        <Text style={styles.akunSaya}>Akun</Text>
      </View>

      {/* Item Daftar */}
      <View style={styles.listItemContainer}>
        <TouchableOpacity
          style={[styles.listItem, {borderBottomWidth: 1}]}
          onPress={() => navigation.navigate('ChangeProfile')}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="user-edit" size={17} color="black" />
          </View>
          <Text style={styles.listItemText}>Ubah Profil</Text>
        </TouchableOpacity>
        {/* Bahasa */}
        <View style={styles.listItem}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="globe" size={20} color="black" />
          </View>
          <Text style={styles.listItemText}>Bahasa</Text>
        </View>
        {/* Jadi Mitra */}
        <View style={styles.listItem}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="briefcase" size={20} color="black" />
          </View>
          <Text style={styles.listItemText}>Jadi Mitra</Text>
        </View>
        {/* Atur Akun */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate('SetUpAccount')}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="link" size={17} color="black" />
          </View>
          <Text style={styles.listItemText}>Atur Akun</Text>
        </TouchableOpacity>
      </View>

      {/* Info Lainnya */}
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Info Lainnya</Text>
      </View>

      {/* Item Daftar 2 */}
      <View style={styles.listItemContainer}>
        {/* Syarat dan Ketentuan */}
        <View style={styles.listItem}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="file-alt" size={20} color="black" />
          </View>
          <Text style={styles.listItemText}>Syarat dan Ketentuan</Text>
        </View>
        {/* Kebijakan Privasi */}
        <View style={styles.listItem}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="shield-alt" size={20} color="black" />
          </View>
          <Text style={styles.listItemText}>Kebijakan Privasi</Text>
        </View>
        {/* Beri Rating */}
        <View style={styles.listItem}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="star" size={17} color="black" />
          </View>
          <Text style={styles.listItemText}>Beri Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLOR.color60,
    paddingTop: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    backgroundColor: COLOR.color60,
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  cardDetailsContainer: {
    marginLeft: 25,
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: COLOR.color30,
  },
  akunSayaContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    backgroundColor: COLOR.color60,
    borderRadius: 5,
  },
  akunSaya: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  listItemContainer: {
    width: '80%',
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemIcon: {
    marginRight: 10,
  },
  listItemText: {
    color: '#000',
    marginLeft: 10,
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: COLOR.color60,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProfileScreen;
