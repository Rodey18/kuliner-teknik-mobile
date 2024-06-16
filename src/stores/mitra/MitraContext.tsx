import {UpdateMitraAvailable} from 'api/mitras';
import {FIREBASE_DB} from 'configs/firebase';
import {collection, onSnapshot} from 'firebase/firestore';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import {Mitra} from 'utils/type';

type MitraContextType = {
  mitras: Mitra[];
  setMitras: React.Dispatch<React.SetStateAction<Mitra[]>>;
};

const MitraContext = createContext<MitraContextType | null>(null);

type MitraProviderProps = {
  children: ReactNode;
};

export const MitraProvider: React.FC<MitraProviderProps> = ({children}) => {
  const [mitras, setMitras] = useState<Mitra[]>([]);

  useEffect(() => {
    const collectionRef = collection(FIREBASE_DB, 'mitras');
    const unsubscribe = onSnapshot(collectionRef, snapshot => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Mitra[];
      setMitras(data);
    });

    UpdateMitraAvailable();

    const intervalId = setInterval(() => {
      UpdateMitraAvailable();
    }, 30000);

    return () => {
      clearInterval(intervalId);
      unsubscribe();
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      mitras,
      setMitras,
    }),
    [mitras, setMitras],
  );

  return (
    <MitraContext.Provider value={contextValue}>
      {children}
    </MitraContext.Provider>
  );
};

export const useMitraContext = () => {
  const context = useContext(MitraContext);
  if (!context) {
    throw new Error('useMitraContext must be used within a MitraProvider');
  }
  return context;
};
