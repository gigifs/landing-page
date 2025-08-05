import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

// 1. Criamos o "Contexto"
const AuthContext = createContext();

// 2. Criamos um "hook" customizado para facilitar o uso do contexto
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Criamos o "Provedor" do contexto. É um componente que vai "abraçar" nosso app
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 4. O "ouvinte" do Firebase que atualiza o usuário em tempo real
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Limpa o ouvinte quando o componente desmonta
  }, []);

  // 5. O valor que será compartilhado com toda a aplicação
  const value = {
    currentUser
  };

  // Se ainda estiver carregando, não mostra o app. Evita "piscar" a tela.
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}