import { createContext, ReactNode } from "react";

type User = {
    id: string;
    name: string;
    avatar: string;
  };
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

  type AuthContextProviderProps = {
      children: ReactNode;
  }
  
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          const { displayName, photoURL, uid } = user;
  
          if (!displayName || !photoURL) {
            throw new Error("Faltando informações do Google.");
          }
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          });
        }
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    async function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
  
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;
  
        if (!displayName || !photoURL) {
          throw new Error("Faltando informações do Google.");
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    }

    return(
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}

function useState<T>(): [any, any] {
    throw new Error("Function not implemented.");
}


function useEffect(arg0: () => () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
