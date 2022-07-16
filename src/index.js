import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";

import { TokenProvider } from "./context/tokenContext";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <TokenProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </TokenProvider>
  </>
);