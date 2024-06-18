import {getDownloadURL, ref, uploadBytes, uploadString} from 'firebase/storage';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {generateProfileImage} from 'utils/helper';
import {Buffer} from 'buffer';
import {FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE} from 'configs/firebase';

const signup = async (
  email: string,
  password: string,
  phoneNumber: string,
  username: string,
) => {
  try {
    // Buat user baru menggunakan Firebase Authentication
    const result = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email.trim(),
      password,
    );

    await AsyncStorage.removeItem('isLoggedIn');

    // TODO: Ubah jadi JPEG AJALAH

    const svgBuffer = await generateProfileImage(username);

    const storageRef = ref(FIREBASE_STORAGE, `profile_img/${username}.svg`);
    await uploadBytes(storageRef, svgBuffer, {contentType: 'image/svg+xml'});

    const downloadURL = await getDownloadURL(storageRef);

    const userDocRef = doc(FIREBASE_DB, 'users', result.user.uid);
    await setDoc(userDocRef, {
      displayName: username,
      phoneNumber: phoneNumber,
      email: email.trim(),
      photoURL: downloadURL,
    });

    const user = {
      ...result.user,
      displayName: username,
      phoneNumber: phoneNumber,
      email: email.trim(),
      photoURL: downloadURL,
    };
    console.log(user);

    return {user: user, error: null};
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    } else {
      console.log(error.message);
      Alert.alert('Sign up gagal! Gunakan email dan password yang benar.');
    }

    return {user: null, error: error.message};
  }
};

export default signup;
