import {FirebaseError} from 'firebase/app';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../configs/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signin = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );
    await AsyncStorage.setItem('isLoggedIn', 'true');

    if (result.user) {
      return {user: result.user, error: null};
    }
  } catch (error) {
    const errorCode: string = (error as FirebaseError).code;
    const errorMessage: string = (error as FirebaseError).message;
    console.error(`Firebase Error: ${errorCode} - ${errorMessage}`);
    return {user: null, error: errorMessage};
  }
};

export default signin;
