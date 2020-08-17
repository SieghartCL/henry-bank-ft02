import React from "react";
import "./CSS/login.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function LoginForm() {
  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };
  return (
    <Container id="login">
      <Image
        id="henrybanklogin"
        src="https://fotos.subefotos.com/d5c4c493938cf65a1773eb9f626cf688o.png"
      ></Image>
      <form
        id="formlogin"
        action="http://localhost:3001/auth/login"
        method="POST"
      >
        <div className="form-group col-md-12" id="contelogin2">
          <div className="input-group mb-3 id" id="contelogin3">
            <input
              name="email"
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
        <div className="form-group col-md-12 " id="contelogin4">
          <div className="input-group mb-3" id="contelogin5">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required
            />
          </div>
          <Button className="forgotpass" href="/resetpassword">
            ¿Olvidaste tu contraseña?
          </Button>
        </div>

        <div className="form-group col-md-6 inicio">
          <input
            className="btn btn-outline-dark"
            type="submit"
            value="Iniciar Sesión"
          />
          <button className="buttonback" type="button" onClick={cancelar}>
            Volver
          </button>
        </div>
      </form>
      <Image
        id="footerlogin"
        src="https://fotos.subefotos.com/0d5c65b0be7d80bce6ee2187e71c9997o.png"
      ></Image>
    </Container>
  );
}
