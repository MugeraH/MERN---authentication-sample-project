import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useToken } from "./useToken";

export const useUser = () => {
  const [token] = useToken();

  const getPayloadFromToken = (token) => {
    const encodedPayload = token.split(".")[1];
    return JSON.parse(window.atob(encodedPayload));

    // return jwt_decode(token);
  };

  const [user, setUser] = useState(() => {
    if (!token) return null;

    return getPayloadFromToken(token);
  });

  useEffect(() => {
    if (!token) {
      setUser(null);
    } else {
      setUser(getPayloadFromToken(token));
    }
  }, [token]);

  return user;
};
