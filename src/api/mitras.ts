import {FIREBASE_DB} from 'configs/firebase';
import {collection, onSnapshot, updateDoc} from 'firebase/firestore';
import {checkIfOpen, timeConverter} from 'utils/helper';

export const UpdateMitraAvailable = () => {
  const q = collection(FIREBASE_DB, 'mitras');
  onSnapshot(q, async querySnapshot => {
    querySnapshot.forEach(async doc => {
      const mitra = doc.data();
      const {currentTime, openTime, closeTime} = timeConverter(mitra.schedule);
      const isOpen = checkIfOpen(currentTime, openTime, closeTime);

      if (mitra.is_open !== isOpen) {
        await updateDoc(doc.ref, {is_open: isOpen});
      }
    });
  });
};
