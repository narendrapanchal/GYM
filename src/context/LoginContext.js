import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";"); // Split all cookies by ";"
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      };

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const eraseCookie = (name) => {
    document.cookie = name + "=; Max-Age=-99999999;";
  };

  const handleLogin = (token, role) => {
    setCookie("token", token, 7); // Expires in 7 days
    setCookie("role", role, 7);
    setLoginData({ token, role });
  };

  const handleLogout = () => {
    eraseCookie("token");
    eraseCookie("role");
    setLoginData({ token: "", role: "" });
  };
  const [loginData, setLoginData] = useState({
    token: getCookie("token") || "",
    role: getCookie("role") || "",
  });

  return (
    <LoginContext.Provider value={{ loginData, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
