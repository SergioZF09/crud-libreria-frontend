import React from "react";
import { Link } from "react-router-dom";

function InicioComponent() {
  return (
    <div className="container text-center pt-5">
      <h1>Bienvenido a la página E-Books</h1>
      <p>Aquí puedes encontrar diversos libros interesantes.</p>
      <div>
        {/* En vez de /libros debe ser /iniciar-sesion */}
        <Link to={"/mostrar-libros"} className="btn btn-primary">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}

export default InicioComponent;
