import { createContext, useState, type ReactNode } from "react";
/*
createContext: função que cria o contexto (compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes).
useState: hook para controlar o estado (user, por exemplo).
ReactNode: tipo do TypeScript para representar qualquer conteúdo React (usado no children do AuthProvider).
*/

// Define o tipo de usuário, com apenas um email para ser autenticado.
type User = {
  email: string;
};

// Define o tipo dos dados e funções que o contexto vai fornecer (função login e logout, assim como o dado User criado acima)
type AuthContextType = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

//  Cria o contexto com um valor inicial padrão (placeholder) para cada dado e função de seu tipo.
// AUthentication Context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout() {},
});

// Cria o component Provider (distribuidor do nosso contexto criado em AuthContext)
// Authentication Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login(email: string) {
    setUser({ email }); // salva o usuário
  }

  function logout() {
    setUser(null); // remove o usuário
  }

  // Retornamos um Provider do contexto.
  // Tudo que estiver dentro de AuthProvider terá acesso ao user, login() e logout() - main.tsx
  // Passamos children que representa qualquer coisa dentro do <AuthProvider>
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
