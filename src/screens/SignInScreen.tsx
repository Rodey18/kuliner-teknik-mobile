import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {checkEmail, checkPassword, checkUsername} from 'utils/validation';
import {COLOR, CONTAINER, FONT} from 'constants/theme';
import CustomTextInput from 'components/CustomTextInput';
import CustomButton from 'components/CustomButton';
import CustomLogo from 'components/CustomLogo';
import {signin} from 'api/auth/signin';

const SignInScreen = ({navigation}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  const handleSubmit = async () => {
    try {
      if (emailText && passwordText) {
        const result = await signin(emailText, passwordText);
        if (result && result.user) {
          // User is signed in, navigate to Home Screen
          navigation.navigate('Home');
        } else if (result && result.error) {
          // Show error message
          console.log(result.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsDisable(
      !(checkEmail(emailText).isValid && checkPassword(passwordText).isValid),
    );
  }, [emailText, passwordText]);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <CustomLogo />
        <Text style={styles.title}>Selamat datang di Kultek!</Text>
        <Text style={styles.content}>Mau makan apa hari ini?</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Sign In</Text>
        <View style={CONTAINER.flexgap8}>
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
          <View style={styles.container}>
            <CustomButton
              title="Masuk"
              isDisable={isDisable}
              type="go"
              onPress={handleSubmit}
            />
            <Text style={{...FONT.content, justifyContent: 'center'}}>
              Belum punya akun?{' '}
              <Text
                style={styles.aggrement}
                //TODO: cocokkan dengan halaman login
                onPress={() => navigation.navigate('Sign Up')}>
                Daftar
              </Text>
            </Text>
          </View>
        </View>
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
    marginVertical: 24,
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

export default SignInScreen;
