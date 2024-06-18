import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR, FONT} from 'constants/theme';
import CustomTextInput from 'components/CustomTextInput';
import {checkPhoneNumber, checkUsername} from 'utils/validation';
import CustomButton from 'components/CustomButton';
import CustomDropdown from 'components/ui/CustomDropdown';
import {createRequest} from 'api/request';

const FormMitraScreen = ({navigation}) => {
  const [nameText, setNameText] = useState('');
  const [phoneNumberText, setPhoneNumberText] = useState('');
  const [addressText, setAddressText] = useState('');
  const [addressUrl, setAddressUrl] = useState('');
  const [selectedType, setSelectedType] = useState();

  const [isDisable, setIsDisable] = useState(true);

  const handleSubmit = async () => {
    try {
      if (
        nameText &&
        (addressText || addressUrl) &&
        phoneNumberText &&
        selectedType
      ) {
        await createRequest({
          name: nameText,
          address: {
            text: addressText,
            gmap: addressUrl,
          },
          whatsapp: phoneNumberText,
          type: selectedType,
        });
        Alert.alert('Permintaan telah dikirim! Kami akan menghubungi Anda');
        navigation.navigate('Profile');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    setIsDisable(
      !(
        checkUsername(nameText).isValid &&
        checkPhoneNumber(phoneNumberText).isValid &&
        selectedType &&
        (addressText || addressUrl)
      ),
    );
  }, [nameText, phoneNumberText, selectedType, addressText, addressUrl]);

  useEffect(() => {
    setAddressText('');
    setAddressUrl('');
  }, [selectedType]);

  const renderedContent = () => {
    if (selectedType === 'online') {
      return (
        <>
          <View>
            <Text style={FONT.detail}>
              Nama Bisnis <Text style={{color: COLOR.red}}>*</Text>
            </Text>
            <CustomTextInput
              placeholder={'Nama Bisnis'}
              text={nameText}
              setText={setNameText}
              inputMode="text"
              isPassword={false}
              validate={checkUsername}
            />
          </View>
          <View>
            <Text style={FONT.detail}>
              Alamat Bisnis <Text style={{color: COLOR.red}}>*</Text>
            </Text>
            <CustomTextInput
              placeholder={'Alamat'}
              text={addressText}
              setText={setAddressText}
              inputMode="text"
              isPassword={false}
              validate={checkUsername}
            />
          </View>
          <View>
            <Text style={FONT.detail}>
              Nomor HP <Text style={{color: COLOR.red}}>*</Text>
            </Text>
            <View style={styles.phoneContainer}>
              <Text style={styles.phoneIdentifier}>+62</Text>
              <CustomTextInput
                placeholder={''}
                text={phoneNumberText}
                setText={setPhoneNumberText}
                inputMode="tel"
                isPassword={false}
                validate={checkPhoneNumber}
              />
            </View>
          </View>
        </>
      );
    } else if (selectedType === 'offline') {
      return (
        <>
          <View>
            <Text style={FONT.detail}>
              Nama Bisnis <Text style={{color: COLOR.red}}>*</Text>
            </Text>
            <CustomTextInput
              placeholder={'Nama Bisnis'}
              text={nameText}
              setText={setNameText}
              inputMode="text"
              isPassword={false}
              validate={checkUsername}
            />
          </View>
          <View>
            <Text style={FONT.detail}>
              Alamat Bisnis <Text style={{color: COLOR.red}}>*</Text>
            </Text>
            <CustomTextInput
              placeholder={'Alamat'}
              text={addressText}
              setText={setAddressText}
              inputMode="text"
              isPassword={false}
              validate={checkUsername}
            />
          </View>
          <View>
            <Text style={FONT.detail}>
              Link Google Maps{' '}
              <Text style={{color: COLOR.red}}>(jika ada)</Text>
            </Text>
            <CustomTextInput
              placeholder={'Link Google Maps'}
              text={addressUrl}
              setText={setAddressUrl}
              inputMode="url"
              isPassword={false}
              validate={checkUsername} // TODO: check URL
            />
          </View>
          <View>
            <Text style={FONT.detail}>
              Nomor HP <Text style={{color: COLOR.red}}>*</Text>
            </Text>
            <View style={styles.phoneContainer}>
              <Text style={styles.phoneIdentifier}>+62</Text>
              <CustomTextInput
                placeholder={''}
                text={phoneNumberText}
                setText={setPhoneNumberText}
                inputMode="tel"
                isPassword={false}
                validate={checkPhoneNumber}
              />
            </View>
          </View>
        </>
      );
    } else {
      return (
        <Text style={FONT.content}>
          Silakan pilih jenis bisnis Anda pada menu di atas.
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.avoidView}>
        <CustomDropdown onValueChange={setSelectedType} />
        {renderedContent()}
      </KeyboardAvoidingView>
      <View style={styles.container}>
        <CustomButton
          title="Daftar"
          isDisable={isDisable}
          type="go"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default FormMitraScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.color60,
    height: '100%',
    padding: 24,
  },
  avoidView: {
    gap: 8,
  },
  phoneContainer: {
    alignItems: 'center',
    gap: 8,
    flexDirection: 'row',
  },
  phoneIdentifier: {
    ...FONT.identifier,
    backgroundColor: COLOR.gray,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
