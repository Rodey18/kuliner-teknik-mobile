import {useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {FIREBASE_AUTH} from 'configs/firebase';

type AuthHookResult = {
  user: User | null;
};

type User = {
  email?: string;
  password?: string;
};

export default function useAuth(): AuthHookResult {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, authUser => {
      if (!authUser) {
        return setUser(null);
      }

      setUser(authUser);
    });

    return () => unsub();
  }, []);

  return {user};
}
