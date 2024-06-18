import {FIREBASE_DB} from 'configs/firebase';
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';
import {Request} from 'utils/type';

const createRequest = async (props: Request) => {
  const c = collection(FIREBASE_DB, 'requests');
  const q = query(c, where('name', '==', props.name.trim()));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    throw new Error(
      'Nama bisnis ini sudah dipakai. Mohon gunakan nama bisnis yang berbeda.',
    );
  }

  const docRef = await addDoc(c, {
    name: props.name.trim(),
    address: {
      text: props.address.text.trim(),
      gmap: props.address.gmap?.trim(),
    },
    whatsapp: props.whatsapp.trim(),
    type: props.type,
  });
  if (!docRef) {
    throw new Error('Terdapat Kesalahan, Silakan Coba Lagi Nanti!');
  }
  return docRef;
};

export {createRequest};
