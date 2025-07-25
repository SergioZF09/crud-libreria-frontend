import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LibroService from "../../../service/LibroService";

function ListarLibrosComponent() {
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

  const eliminarLibro = (id) => {
    LibroService.eliminarLibro(id)
      .then((response) => {
        listarLibros();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listarLibros();
  }, []);

  return (
    <div className="container pt-5">
      <h1 className="pb-5">Lista de Libros</h1>
      <Link to={"/agregar-libro"} className="btn btn-primary">
        Registrar
      </Link>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Fecha de Publicación</th>
            <th>Género(s)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.id}</td>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.fechaPublicacion}</td>
              <td>{libro.genero}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/actualizar-libro/${libro.id}`}
                >
                  Actualizar
                </Link>
                &nbsp;|&nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarLibro(libro.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarLibrosComponent;
