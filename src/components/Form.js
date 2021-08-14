import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
const Form = ({ saveDate }) => {
  const initialState = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  };

  const [date, setDate] = useState(initialState);
  const [error, setError] = useState(false);
  const updateState = (e) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };
  const submitCita = (e) => {
    e.preventDefault();
    for (let key of Object.keys(date)) {
      if (date[key].trim() === "") {
        setError(true);
        return;
      }
    }
    date.id = uuidv4();
    setError(false);
    saveDate(date);
    setDate(initialState);
  };
  const { mascota, propietario, fecha, hora, sintomas } = date;
  return (
    <>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <h2>Crear Cita</h2>
      <label>Nombre Mascota</label>
      <form onSubmit={submitCita}>
        <input
          className="u-full-width"
          type="text"
          placeholder="Nombre Mascota"
          name="mascota"
          onChange={updateState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          className="u-full-width"
          type="text"
          placeholder="Nombre Dueño de la mascota"
          name="propietario"
          onChange={updateState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          className="u-full-width"
          type="date"
          name="fecha"
          onChange={updateState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          className="u-full-width"
          type="time"
          name="hora"
          onChange={updateState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={updateState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};
Form.propTypes = {
  saveDate: PropTypes.func.isRequired,
};
export default Form;
