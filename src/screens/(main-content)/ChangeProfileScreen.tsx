import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import CustomTextInput from 'components/CustomTextInput';
import {checkEmail, checkPhoneNumber, checkUsername} from 'utils/validation';
import CustomButton from 'components/CustomButton';
import {COLOR, CONTAINER, FONT} from 'constants/theme';

interface Props {}

const ChangeProfileScreen: React.FC<Props> = ({navigation}: any) => {
  // TODO: @raikhy ubah nilai awal useState setiap variable sesuai data user dengan useAuth().
  const [usernameText, setUsernameText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  // TODO: @raihky button submit akan tetap disable jika tidak ada perubahan. mungkin bisa kayak username(yang dari auth itu) === usernameText. Jadi ketika ini masih sama, ke disable tombol submit / simpannya. Lakukan hal itu hingga emailText.
  useEffect(() => {
    setIsDisable(
      !(checkUsername(usernameText).isValid && checkEmail(emailText).isValid),
    );
  }, [usernameText, emailText]);

  const handleSubmit = () => {
    // TODO: @raihky update data user jika ada perubahan

    setUsernameText('');
    setEmailText('');
    setPhoneText('');

    Alert.alert('Sukses', 'Data berhasil diperbarui.');
  };

  return (
    <View style={styles.page}>
      <View style={CONTAINER.flexbox}>
        <View style={styles.circleImage}>
          <Text style={styles.circleText}>s</Text>
        </View>
        <Text style={styles.content}>Ganti Foto</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Akun</Text>
        <KeyboardAvoidingView behavior="padding">
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
          </View>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.container}>
        <CustomButton
          title="Simpan"
          isDisable={isDisable}
          type="go"
          onPress={handleSubmit}
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
    color: COLOR.color30,
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
  circleImage: {
    width: 75,
    height: 75,
    backgroundColor: COLOR.nostar,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    ...FONT.title,
    color: COLOR.color60,
  },
});

export default ChangeProfileScreen;
