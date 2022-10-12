import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";

import { TokenProvider } from "./context/tokenContext";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <TokenProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </TokenProvider>
  </>
);