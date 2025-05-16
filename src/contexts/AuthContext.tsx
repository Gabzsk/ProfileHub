import { createContext, useEffect, useState, type ReactNode } from "react";
import { type EditableUserFields, type User } from "../types/User"; // Define o tipo de usuário, sendo ele o User criado na pasta Types

/*
createContext: função que cria o contexto (compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes).
useState: hook para controlar o estado (user, por exemplo).
ReactNode: tipo do TypeScript para representar qualquer conteúdo React (usado no children do AuthProvider).
*/

// Define o tipo dos dados e funções que o contexto vai fornecer (função login e logout, assim como o dado User criado acima)
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string) => void;
  logout: () => void;
  updateUser: (updatedFields: EditableUserFields) => void;
};

//  Cria o contexto com um valor inicial padrão (placeholder) para cada dado e função de seu tipo.
// AUthentication Context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: () => {},
  logout() {},
  updateUser: () => {},
});

// Cria o component Provider (distribuidor do nosso contexto criado em AuthContext)
// Authentication Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function updateUser(updatedFields: EditableUserFields) {
    if (!user) return;
    const updatedUser = {
      ...user,
      ...updatedFields, // sobrescreve apenas os campos que foram editados
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  // 1. Tenta carregar o usuário salvo ao iniciar o app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // 2. Quando logar, salva no localStorage
  function login(email: string) {
    const newUser = {
      email,
      name: "Gabriel Nobre Modesto",
      imageUrl:
        "https://avatars.githubusercontent.com/u/85908338?s=400&u=dc33281b654c07dbf5a29f7e6d74f620d0c5e376&v=4",
      bio: "FrontEnd Jr Dev",
      gitHubUrl: "https://github.com;GabzsK",
      linkedinUrl: "https://www.linkedin.com/in/gabrielmodesto/",
      twitterUrl: "https://x.com/Gabiziski",
    };
    setUser(newUser); // salva o usuário
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  // 3. Quando deslogar, remove do localStorage
  function logout() {
    setUser(null); // remove o usuário
    localStorage.removeItem("user");
  }

  // Retornamos um Provider do contexto.
  // Tudo que estiver dentro de AuthProvider terá acesso ao user, login() e logout() - main.tsx
  // Passamos children que representa qualquer coisa dentro do <AuthProvider>
  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoading, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
