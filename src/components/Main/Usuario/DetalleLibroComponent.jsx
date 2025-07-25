import React, { useEffect, useState } from "react";
import LibroService from "../../../service/LibroService";
import { useParams } from "react-router-dom";
import {
  mostrarGeneros,
  mostrarFechaPublicacion,
} from "../../../utils/libroUtils";

function DetalleLibroComponent() {
  const [libro, setLibro] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    LibroService.obtenerLibro(id)
      .then((response) => {
        setLibro(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!libro) {
    return <p className="text-center">Cargando...</p>;
  }

  return (
    <div>
      <h1 className="text-center pb-5">Detalle del libro</h1>
      <div className="container">
        <div className="d-flex flex-row-reverse flex-wrap justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleLibroComponent;
