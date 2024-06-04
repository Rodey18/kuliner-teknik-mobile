import {useEffect, useState} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import {FIREBASE_AUTH} from 'configs/firebase';

type AuthHookResult = {
  user: User | undefined;
  loading: boolean;
};

export default function useAuth(): AuthHookResult {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(FIREBASE_AUTH, authUser => {
      setUser(authUser || undefined);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return {user, loading};
}
