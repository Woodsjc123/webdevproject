import { createContext } from "react";

const adminContext = createContext({
  admin: false,
  setAdmin: (adminAuth) => {}
});

export default adminContext;