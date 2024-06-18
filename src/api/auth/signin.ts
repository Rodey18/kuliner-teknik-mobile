import {signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../configs/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const signin = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email.trim(),
      password,
    );
    await AsyncStorage.setItem('isLoggedIn', 'true');

    if (result.user) {
      return {user: result.user, error: null};
    }
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      Alert.alert('Akun Anda tidak ditemukan! Silakan untuk membuat akun baru');
    } else if (
      error.code === 'auth/invalid-email' ||
      error.code === 'auth/invalid-password' ||
      error.code === 'auth/invalid-credential'
    ) {
      Alert.alert('Email atau kata sandi yang Anda masukkan tidak valid.');
    } else if (error.code === 'auth/network-request-failed') {
      Alert.alert('Terjadi masalah dengan koneksi jaringan Anda.');
    } else {
      Alert.alert('Sign in gagal! silakan coba lagi nanti');
    }
  }
};

export default signin;
