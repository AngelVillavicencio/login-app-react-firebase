import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CallStateAuth } from "../../../services/firebase/authFirebase";
export const ContextApiGpt = createContext();

export const useApiGPT = () => {
  const apiContext = useContext(ContextApiGpt);
  return apiContext;
};

export const ApiGPTProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const setStateUser = (user) => setUser(user);

  useEffect(() => {

  }, []);

  return (
    <ContextApiGpt.Provider
      value={{
        user,
        setStateUser: setStateUser,
        loading,
        setLoading: setLoading,
      }}
    >
      {children}
    </ContextApiGpt.Provider>
  );
};
