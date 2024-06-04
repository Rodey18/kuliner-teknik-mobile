import {FIREBASE_AUTH, FIREBASE_DB} from 'configs/firebase';
import {updateProfile} from 'firebase/auth';
import {addDoc, collection} from 'firebase/firestore';
import {User} from 'utils/type';

interface UserProfile {
  username?: string;
  phoneNumber?: string;
  // Tambahkan properti tambahan sesuai kebutuhan, seperti alamat, dll.
}

async function createUser({username, email, birth_date, phone, job}: User) {
  try {
    const docRef = await addDoc(collection(FIREBASE_DB, 'users'), {
      username,
      email,
      birth_date,
      phone,
      job,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error saving user data:', error);
  }
}

async function updateUsers(props: UserProfile) {
  try {
    const user = await FIREBASE_AUTH.currentUser;

    if (user) {
      await updateProfile(user, props);
    }
  } catch (error) {}
}

export {updateUsers, createUser};
