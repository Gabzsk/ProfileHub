import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode; // tipo do React que representa qualquer coisa que possa ser renderizada por um componente React.
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Se não estiver logado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Se estiver logado, renderiza a rota normalmente
  return <>{children}</>;
}
