import {FirebaseError} from 'firebase/app';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../configs/firebase';

const signup = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password,
    );

    if (result.user) {
      // await
    }

    return result;
  } catch (error) {
    const errorCode: string = (error as FirebaseError).code;
    const errorMessage: string = (error as FirebaseError).message;
    console.error(`Firebase Error: ${errorCode} - ${errorMessage}`);
  }
};

export default signup;
