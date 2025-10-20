import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Feed } from './pages/Feed';
import { Cadastro } from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
