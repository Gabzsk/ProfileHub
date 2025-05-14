import { useContext, useCallback } from "react";
// UseCallback: Hook para memorizar uma função, útil para evitar recriações desnecessárias da mesma função em renderizações.
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// Cria um hook customizado e reutilizável (estamos utilizando em Profile.tsx), encapsulando a lógica do logout, separando da UI.
export const useLogout = () => {
  const { logout } = useContext(AuthContext); // obtém apenas a função logout do context
  const navigate = useNavigate();

  //  useCallback: Memoriza a função handleLogout para evitar recriação em re-renderizações desnecessárias.
  // "[logout, navigate]" são Dependencias do callback. Ele só recria essa função quando uma de suas dependências mudar.
  // Isso pode causar bugs sutis, especialmente em testes ou componentes dinâmicos.
  const handleLogout = useCallback(() => {
    logout(); // limpa o estado do usuário (e o localStorage)
    navigate("/", { replace: true }); // retorna o usuário para a tela de login e impede que o usuário use a seta de "voltar" e volte para a página protegida após logout.
  }, [logout, navigate]); // !! Sempre inclua no array de dependências tudo o que você usa dentro da função useCallback, exceto constantes literais !!

  return handleLogout;
};
