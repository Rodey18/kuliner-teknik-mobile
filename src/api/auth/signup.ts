import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../configs/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const signup = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );
    await AsyncStorage.removeItem('isLoggedIn');

    /**
     * TODO: @raihky update profile firebase dengan nomor handphone, photo url yang didapat
     * TODO: dari input. Lalu gunakan fitur email verification.
     * * Documentation https://firebase.google.com/docs/auth/web/manage-users
     */

    if (!result.user) {
      throw Error;
    }
    Alert.alert('cek email ta kak!');
    return {user: result.user, error: null};
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    } else {
      Alert.alert('Sign up gagal! gunakan email dan password yang benar');
    }
  }
};

export default signup;
