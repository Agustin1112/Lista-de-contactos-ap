import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import agendaImage from "../../img/agenda.png"; // Ajusta la ruta según tu estructura

export const Home = () => (
  <div className="vw-100 d-flex align-items-center justify-content-center ">
    <div className="text-center mt-5">
      <h1>Welcome!</h1>
      <p>
        <img src={agendaImage} alt="Agenda" width="300" height="300" />
      </p>
      <Link to="/contacts" className="btn btn-success align-items-center fs-5">
        Show me all contacts
      </Link>
    </div>
  </div>
);

