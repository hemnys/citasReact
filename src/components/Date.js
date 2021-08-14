import React from "react";
import PropTypes from "prop-types";
const Date = ({ date, removeDate }) => {
  const { mascota, propietario, fecha, hora, sintomas, id } = date;
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => {
          removeDate(id);
        }}
      >
        Eliminar &times;
      </button>
    </div>
  );
};
Date.propTypes = {
  date: PropTypes.object.isRequired,
  removeDate: PropTypes.func.isRequired,
};
export default Date;
