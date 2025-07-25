export const mostrarGeneros = (genero) => {
  const generos = {
    ROMANTICA: "Romántica",
    CIENCIA_FICCION: "Ciencia Ficción",
    AVENTURA: "Aventura",
    FANTASIA: "Fantasía",
  };

  return generos[genero] || genero;
};

export const mostrarFechaPublicacion = (fechaPublicacion) => {
  const fecha = new Date(fechaPublicacion);
  return new Intl.DateTimeFormat("es-Es", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(fecha);
};
