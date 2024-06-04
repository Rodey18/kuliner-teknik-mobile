import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  checkEmail,
  checkPassword,
  checkPhoneNumber,
  checkUsername,
} from 'utils/validation';
import {COLOR, CONTAINER, FONT} from 'constants/theme';
import CustomTextInput from 'components/CustomTextInput';
import CustomButton from 'components/CustomButton';
import CustomChecklist from 'components/CustomCheckbox';
import CustomLogo from 'components/CustomLogo';
import signup from 'api/auth/signup';

const SignUpScreen = ({navigation}: any) => {
  const [usernameText, setUsernameText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {
    try {
      if (emailText && passwordText) {
        const result = await signup(emailText, passwordText);
        if (result?.error) {
          throw Error('Terdapat kesalahan dalam melakukan sign in');
        }
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email atau kata sandi yang Anda masukkan tidak valid.');
      } else if (error.code === 'auth/network-request-failed') {
        Alert.alert('Terjadi masalah dengan koneksi jaringan Anda.');
      } else {
        Alert.alert('Registrasi gagal! silakan coba lagi nanti');
      }
    }
  };

  useEffect(() => {
    setIsDisable(
      !(
        checkUsername(usernameText).isValid &&
        checkEmail(emailText).isValid &&
        checkPassword(passwordText).isValid &&
        checkPhoneNumber(phoneText).isValid &&
        isChecked
      ),
    );
  }, [usernameText, emailText, passwordText, isChecked, phoneText]);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <CustomLogo />
        <Text style={styles.title}>Selamat datang di Kultek!</Text>
        <Text style={styles.content}>
          Daftar tidak memerlukan waktu yang lama!
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Sign Up</Text>
        <View style={CONTAINER.flexgap8}>
          <KeyboardAvoidingView behavior="padding">
            <View>
              <Text style={FONT.detail}>
                Username <Text style={{color: COLOR.red}}>*</Text>
              </Text>
              <CustomTextInput
                placeholder={'Username'}
                text={usernameText}
                setText={setUsernameText}
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
                  text={phoneText}
                  setText={setPhoneText}
                  inputMode="tel"
                  isPassword={false}
                  validate={checkPhoneNumber}
                />
              </View>
            </View>
            <View>
              <Text style={FONT.detail}>
                Email <Text style={{color: COLOR.red}}>*</Text>
              </Text>
              <CustomTextInput
                placeholder={'Email'}
                text={emailText}
                setText={setEmailText}
                inputMode="email"
                isPassword={false}
                validate={checkEmail}
              />
            </View>
            <View>
              <Text style={FONT.detail}>
                Password <Text style={{color: COLOR.red}}>*</Text>
              </Text>
              <CustomTextInput
                placeholder={'Password'}
                text={passwordText}
                setText={setPasswordText}
                inputMode="text"
                isPassword
                validate={checkPassword}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={CONTAINER.checkbox}>
            <CustomChecklist isChecked={isChecked} handleCheck={handleCheck} />
            <Text style={FONT.content}>
              Saya setuju dengan{' '}
              <Text
                style={styles.aggrement}
                onPress={() => navigation.navigate('Term & Condition')}>
                Syarat dan Ketentuan
              </Text>{' '}
              dan{' '}
              <Text
                style={styles.aggrement}
                onPress={() => navigation.navigate('Privacy Policy')}>
                Kebijakan Privasi
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <CustomButton
          title="Daftar"
          isDisable={isDisable}
          type="go"
          onPress={handleSubmit}
        />
        <Text style={FONT.content}>
          Sudah punya akun?{' '}
          <Text
            style={styles.aggrement}
            //TODO: cocokkan dengan halaman login
            onPress={() => navigation.navigate('Sign In')}>
            Masuk
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLOR.color60,
    padding: 24,
  },
  header: {
    ...CONTAINER.flexbox,
    backgroundColor: COLOR.color10,
    padding: 16,
    borderRadius: 8,
  },
  container: {
    ...CONTAINER.flexgap8,
    marginVertical: 48,
  },
  title: {...FONT.title, marginTop: 24, color: COLOR.color60},
  subtitle: {...FONT.subtitle, marginBottom: 16, marginTop: 24},
  detail: {
    ...FONT.detail,
    color: COLOR.red,
  },
  aggrement: {
    ...FONT.content,
    color: COLOR.red,
  },
  content: {
    ...FONT.content,
    color: COLOR.color60,
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

export default SignUpScreen;
