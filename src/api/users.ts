import {FIREBASE_AUTH} from '@/configs/firebase';
import {updateProfile} from 'firebase/auth';

interface UserProfile {
  username?: string;
  phoneNumber?: string;
  // Tambahkan properti tambahan sesuai kebutuhan, seperti alamat, dll.
}

async function updateUsers(props: UserProfile) {
  try {
    const user = await FIREBASE_AUTH.currentUser;

    if (user) {
      await updateProfile(user, props);
    }
  } catch (error) {}
}

const styles = StyleSheet.create({});

export {updateUsers};
