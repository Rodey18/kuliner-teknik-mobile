import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {checkEmail, checkPassword, checkUsername} from 'utils/validation';
import {COLOR, CONTAINER, FONT} from 'constants/theme';
import CustomTextInput from 'components/CustomTextInput';
import CustomButton from 'components/CustomButton';
import CustomChecklist from 'components/CustomCheckbox';
import CustomLogo from 'components/CustomLogo';
import signup from 'api/auth/signup';

const SignUpScreen = ({navigation}) => {
  const [usernameText, setUsernameText] = useState('');
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
        await signup(emailText, passwordText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsDisable(
      !(
        checkUsername(usernameText).isValid &&
        checkEmail(emailText).isValid &&
        checkPassword(passwordText).isValid &&
        isChecked
      ),
    );
  }, [usernameText, emailText, passwordText, isChecked]);

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
                onPress={() => navigation.navigate('Sign Up')}>
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
            onPress={() => navigation.navigate('Login')}>
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
});

export default SignUpScreen;
