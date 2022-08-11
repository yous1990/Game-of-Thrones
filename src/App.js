import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Common/NavBar";
import Books from "./components/Books";
import Characters from "./components/Characters";

import { AppContextProvider } from "./store/reducers";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="characters" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
