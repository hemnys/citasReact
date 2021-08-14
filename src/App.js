import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Date from "./components/Date";

function App() {
  let initDates = JSON.parse(localStorage.getItem("dates"));
  if (!initDates) {
    initDates = [];
  }
  const [dates, setDates] = useState(initDates);
  useEffect(() => {
    if (initDates) {
      localStorage.setItem("dates", JSON.stringify(dates));
    } else {
      localStorage.setItem("dates", JSON.stringify([]));
    }
  }, [dates, initDates]);
  const saveDate = (currenDate) => {
    setDates([...dates, currenDate]);
  };
  const removeDate = (id) => {
    let remainingDates = dates.filter((date) => date.id !== id);
    setDates(remainingDates);
  };
  const title = dates.length === 0 ? "No hay Citas" : "Administra tus citas";
  return (
    <>
      <h1>listado de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form saveDate={saveDate} />
          </div>
          <div className="one-half column">
            <h1>{title}</h1>
            {dates.map((date) => (
              <Date key={date.id} date={date} removeDate={removeDate} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
