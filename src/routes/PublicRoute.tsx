import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

//PublicRoute verifica se o usuário está logado (ou seja, se user !== null).
// Se estiver logado, redireciona automaticamente para /profile, impedindo acesso à rota pública (/, que é sua página de login).

type PublicRouteProps = {
  children: ReactNode;
};

export default function PublicRoute({ children }: PublicRouteProps) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to={"/profile"} replace />;
  }

  return children;
}
