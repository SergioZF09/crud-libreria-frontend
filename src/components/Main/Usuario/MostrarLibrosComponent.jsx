import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LibroService from "../../../service/LibroService";
import {
  mostrarGeneros,
  mostrarFechaPublicacion,
} from "../../../utils/libroUtils";

function MostrarLibrosComponent() {
  const [libros, setLibros] = useState([]);

  const listarLibros = () => {
    LibroService.obtenerTodosLosLibros()
      .then((response) => {
        setLibros(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listarLibros();
  }, []);

  return (
    <div>
      <h1 className="text-center pb-5">Libros registrados</h1>
      <div className="container">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {libros.map((libro) => (
            <div
              className="card me-3 mb-4"
              style={{ width: "18rem" }}
              key={libro.id}
            >
              <div className="card-body">
                <h5 className="card-title">Título: {libro.titulo}</h5>
                <p>Autor: {libro.autor}</p>
                <p>
                  Fecha de publicación:{" "}
                  {mostrarFechaPublicacion(libro.fechaPublicacion)}
                </p>
                <p>Género: {mostrarGeneros(libro.genero)}</p>
                <Link
                  to={`/detalle-libro/${libro.id}`}
                  className="btn btn-info"
                >
                  Más detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostrarLibrosComponent;
