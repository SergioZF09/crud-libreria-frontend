import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import ListarLibrosComponent from "./components/Main/Admin/ListarLibrosComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import RegistrarLibroComponent from "./components/Main/Admin/RegistrarLibroComponent";
import ActualizarLibroComponent from "./components/Main/Admin/ActualizarLibroComponent";
import InicioComponent from "./components/Main/InicioComponent";
import MostrarLibrosComponent from "./components/Main/Usuario/MostrarLibrosComponent";
import DetalleLibroComponent from "./components/Main/Usuario/DetalleLibroComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<InicioComponent />} />
            <Route path="/libros" element={<ListarLibrosComponent />} />
            <Route
              path="/agregar-libro"
              element={<RegistrarLibroComponent />}
            />
            <Route
              path="/actualizar-libro/:id"
              element={<ActualizarLibroComponent />}
            />
            <Route
              path="/mostrar-libros"
              element={<MostrarLibrosComponent />}
            />
            <Route
              path="/detalle-libro/:id"
              element={<DetalleLibroComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
