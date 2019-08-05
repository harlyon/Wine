import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

const API_URL = "http://localhost:1337/wines";

export function ContextController({ children }) {
  let intialState = {
    wine: []
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(res => {
        setState({
          wine: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
