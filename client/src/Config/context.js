import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

const API_URL = "http://localhost:1337/wines";

export function ContextController({ children }) {
  const [wine, setWine] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => {
        setWine({
          wine: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[wine, setWine]}>{children}</Context.Provider>
  );
}
