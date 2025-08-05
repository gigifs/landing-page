import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase'; // 1. Importamos nosso 'db' do Firestore
import { doc, getDoc } from 'firebase/firestore'; // 2. Importamos as ferramentas para ler dados

// 1. Criamos o "Contexto"
const AuthContext = createContext();

// 2. Criamos um "hook" customizado para facilitar o uso do contexto
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Criamos o "Provedor" do contexto. É um componente que vai "abraçar" nosso app
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null); // 3. NOVO ESTADO para guardar os dados do perfil
  const [loading, setLoading] = useState(true);

  // 4. O "ouvinte" do Firebase que atualiza o usuário em tempo real
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setCurrentUser(user);

      // 4. LÓGICA PARA BUSCAR DADOS DO PERFIL
      if (user) {
        // Se um usuário está logado, busca seu documento no Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // Se o documento existe, guarda os dados no nosso novo estado
          setUserData(userDocSnap.data());
        } else {
          console.log("Não foi encontrado um perfil para este usuário no Firestore.");
          setUserData(null);
        }
      } else {
        // Se não há usuário, limpa os dados do perfil
        setUserData(null);
      }

      setLoading(false);
    });

    return unsubscribe; // Limpa o ouvinte quando o componente desmonta
  }, []);

  // 5. O valor que será compartilhado com toda a aplicação
  const value = {
    currentUser,
    userData
  };

  // Se ainda estiver carregando, não mostra o app. Evita "piscar" a tela.
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}