import React, { useState, useEffect } from "react";
import "./recargardinero.css";
import Button from "react-bootstrap/Button";
import { getProfile, cargarDinero } from "../../actions/UserActions";
import { connect } from "react-redux";
import montoRecarga from "./montoRecarga";

function CargarDinero(props) {
  const montoARecargar = props.location.state.value;
  useEffect(() => {
    getProfile();
  }, []);

  const handlerSubmit = (e) => {
    cargarDinero(props.usuarioConectado.id, montoARecargar);
  };

  return (
    <div id="recargardinero">
      <div className="titulo">
        <h1>Recargar Dinero</h1>
      </div>
      <svg id="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fill-opacity="1" d={d1}></path>
      </svg>
      <svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fffe00" fill-opacity="1" d={d2}></path>
      </svg>
      <svg id="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ff0330" fill-opacity="1" d={d3}></path>
      </svg>
      <div className="form-group col-md-5 recarga">
        <div>
          <p>
            Usá el siguiente código siempre que quieras depositar dinero en tu
            cuenta. Recordá que el valor mínimo admitido es de $50
          </p>
        </div>
        <div className="codigo">
          <span> 25672131</span>
        </div>
        <svg
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#000000" fill-opacity="1" d={d1}></path>
        </svg>
        <svg
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#fffe00" fill-opacity="1" d={d2}></path>
        </svg>
        <svg
          id="svg3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path fill="#ff0330" fill-opacity="1" d={d3}></path>
        </svg>
        <div className="form-group col-md-5 recarga">
          <div>
            <p>
              Usá el siguiente código siempre que quieras depositar dinero en tu
              cuenta. Recordá que el valor mínimo admitido es de $50
            </p>
          </div>
          <div className="codigo">
            <span> 0800 222 7749</span>
          </div>
          <div>
            <p>(Mostrar el código al cajero en RapiPago o Pago Fácil)</p>
          </div>
          <div className="confirmar">
            <Button
              className="btn btn-dark"
              onClick={(e) => handlerSubmit(e)}
              variant="top"
              size="lg"
            >
              Confirmar Recarga
            </Button>
          </div>
        </div>
        <div className="confirmar">
          <Button
            className="btn btn-dark"
            onClick={
              (() => setCantidad(montoARecargar),
              cargarDinero(props.usuarioConectado.id, cantidad))
            }
            variant="top"
            size="lg"
          >
            Confirmar Recarga
          </Button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    usuarioConectado: state.usuario.usuarioConectado,
  };
}

export default connect(mapStateToProps, { getProfile })(CargarDinero);
