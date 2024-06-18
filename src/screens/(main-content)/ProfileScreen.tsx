import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR, FONT} from 'constants/theme';
import useAuth from 'hooks/useAuth';
import UserLogo from 'components/ui/UserLogo';
interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  /**
   * TODO: @raihky ambil (get) data user nama, photourl, email, nomor hp menggunakan code
   * TODO: dibawah ini. Sisa anda tampilkan di UI.
   */
  const {user} = useAuth();
  console.log(user);

  return (
    <View style={styles.container}>
      {/* Kartu 1 */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => console.log('Kartu 1 ditekan')}>
        <View style={styles.cardContainer}>
          <UserLogo img={user?.photoURL} />
          <View>
            <Text style={styles.cardTitle}>{user?.displayName}</Text>
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
      <View>
        <TouchableOpacity
          style={[styles.listItem, {borderBottomWidth: 1}]}
          onPress={() => navigation.navigate('Change Profile')}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="user-edit" size={20} color="black" />
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
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate('Form Mitra')}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="briefcase" size={20} color="black" />
          </View>
          <Text style={styles.listItemText}>Jadi Mitra</Text>
        </TouchableOpacity>
        {/* Atur Akun */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => navigation.navigate('Setting')}>
          <View style={styles.listItemIcon}>
            <FontAwesome5Icon name="link" size={20} color="black" />
          </View>
          <Text style={styles.listItemText}>Atur Akun</Text>
        </TouchableOpacity>
      </View>

      {/* Info Lainnya */}
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Info Lainnya</Text>
      </View>

      {/* Item Daftar 2 */}
      <View>
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
            <FontAwesome5Icon name="star" size={20} color="black" />
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
    backgroundColor: COLOR.color60,
    padding: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.color60,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  cardTitle: FONT.subtitle,
  cardDetails: FONT.identifier,
  akunSayaContainer: {
    marginTop: 24,
    backgroundColor: COLOR.color60,
    borderRadius: 5,
  },
  akunSaya: FONT.detail,
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.line,
    gap: 8,
  },
  listItemIcon: {
    width: 24,
    height: 24,
  },
  listItemText: {
    color: '#000',
  },
  infoContainer: {
    marginTop: 20,
    backgroundColor: COLOR.color60,
  },
  info: FONT.detail,
});

export default ProfileScreen;
