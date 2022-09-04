import React from "react";
import "../../css/date.css";

export default function DisplayDate() {
  const weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  const current = new Date();
  const numDay = current.getDate();
  const day = weekday[current.getDay()];
  const month = months[current.getMonth()];
  return (
    <section className="dates">
      <div className="date-container">
        <div className="numday-container">
          <h2>{numDay}</h2>
        </div>
        <div className="day-container">
          <h2>{day}</h2>
          <h2>{month}</h2>
        </div>
      </div>
    </section>
  );
}
