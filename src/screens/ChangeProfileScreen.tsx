import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import CustomTextInput from 'components/CustomTextInput';
import CustomLogo from 'components/CustomLogo';

interface Props {}

const ChangeProfileScreen: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [updatedData, setUpdatedData] = useState<any>(null);

  const handleSave = () => {
    if (!name || !email || !phoneNumber) {
      Alert.alert(
        'Peringatan',
        'Silakan lengkapi semua field sebelum menyimpan.',
      );
      return;
    }

    if (!email.includes('@gmail.com')) {
      Alert.alert('Error', 'Email harus memiliki domain @gmail.com');
      return;
    }

    // Simulasi proses penyimpanan data
    const newData = {name, email, phoneNumber};
    setUpdatedData(newData);

    // Mengosongkan input setelah menyimpan
    setName('');
    setEmail('');
    setPhoneNumber('');

    Alert.alert('Sukses', 'Data berhasil diperbarui.');
  };

  const handleChangePhoneNumber = (text: string) => {
    if (text.startsWith('+62')) {
      setPhoneNumber(text);
    } else if (text.startsWith('0')) {
      setPhoneNumber('+62' + text.slice(1));
    } else {
      setPhoneNumber('+62' + text);
    }
  };

  return (
    <View style={styles.container}>
      {updatedData ? (
        <View
          style={[
            styles.updatedDataContainer,
            styles.updatedDataContainerBlue,
          ]}>
          <Text style={styles.updatedDataText}>Data berhasil diperbarui:</Text>
          <Text style={styles.updatedDataText}>Name: {updatedData.name}</Text>
          <Text style={styles.updatedDataText}>Email: {updatedData.email}</Text>
          <Text style={styles.updatedDataText}>
            Nomor HP: {updatedData.phoneNumber}
          </Text>
        </View>
      ) : (
        <>
          {/* Card 1 */}
          <TouchableOpacity
            style={[styles.card, styles.card1]}
            onPress={() => console.log('Card 1 pressed')}>
            <View style={styles.cardTextContainer}>
              <CustomLogo />
              <View style={styles.cardDetailsContainer}>
                <Text style={styles.cardTitle}>Nasi Kuning</Text>
                <Text style={styles.cardDetails}>Nasi Kuning Pojok, Gowa</Text>
                <Text style={styles.cardDetails}>0852 | user@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* nama */}
          <View style={styles.namaContainer}>
            <View>
              <Text style={styles.detail}>
                Name <Text style={{color: '#ff0000'}}>*</Text>
              </Text>
              <CustomTextInput
                placeholder={'Name'}
                text={name}
                setText={setName}
                inputMode="text"
                isPassword={false}
              />
            </View>
          </View>
          {/* Email */}
          <View style={styles.namaContainer}>
            <View>
              <Text style={styles.detail}>
                Email <Text style={{color: '#ff0000'}}>*</Text>
              </Text>
              <CustomTextInput
                placeholder={'Email'}
                text={email}
                setText={setEmail}
                inputMode="email"
                isPassword={false}
              />
            </View>
          </View>
          {/* No.Hp */}
          <View style={styles.namaContainer}>
            <View>
              <Text style={styles.detail}>
                Nomor HP <Text style={{color: '#ff0000'}}>*</Text>
              </Text>
              <CustomTextInput
                placeholder={'Nomor HP'}
                text={phoneNumber}
                setText={handleChangePhoneNumber}
                inputMode="numeric"
                isPassword={false}
              />
            </View>
          </View>

          {/* Tombol Save */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#f0f0f0',
    marginBottom: 30,
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
    color: '#000',
  },
  namaContainer: {
    marginTop: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    borderRadius: 5,
    width: '80%', // Adjust width to match the card
    marginLeft: '10%', // Align with the left side of the card
  },
  detail: {
    fontSize: 14,
    color: '#000',
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  updatedDataContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    width: '80%',
    alignItems: 'center',
  },
  updatedDataText: {
    fontSize: 16,
    marginBottom: 5,
  },
  updatedDataContainerBlue: {
    backgroundColor: 'blue', // Ganti dengan warna biru yang diinginkan
  },
});

export default ChangeProfileScreen;
