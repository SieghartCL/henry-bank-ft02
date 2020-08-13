import React, { useState, useEffect } from "react";
import { getAddress, getProfile } from "../../actions/UserActions";
import { connect } from "react-redux";
import "./CSS/altaCliente.css";
import header from "./Images/header.png";
import swal from "sweetalert";

function EditUserForm({ id, getAddress, usuarioConectado, getProfile }) {
  const [user, setUser] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const address = {
    street: user.street,
    city: user.city,
    country: user.country,
  };

  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    setUser(usuarioConectado);
  }, [usuarioConectado]);

  const cancelar = function (e) {
    window.location.replace("http://localhost:3000/cliente");
  };

  return (
    <div>
      <div id="login">
        <img src={header} alt="header" />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            getAddress(address, id, user);
          }}
        >
          <div class="input-gruop mb-3">
            <input
              class="form-control"
              name="firstName"
              placeholder="Nombre"
              value={user.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="documentType"
              placeholder="Tipo de documento"
              value={user.lastName}
              readonly
            />
            <input
              class="form-control"
              name="identification"
              placeholder="Número"
              value={user.identification}
              readonly
            />
            <input
              class="form-control"
              name="phone"
              placeholder="Teléfono"
              value={user.phone}
              onChange={handleInputChange}
              required
            />
            <p>Fecha de nacimiento</p>
            <input
              class="form-control"
              type="date"
              name="birthDate"
              placeholder="Fecha de nacimiento"
              value={user.birthDate}
              readonly
              required
            />
            <input
              class="form-control"
              name="street"
              placeholder="Calle y altura"
              value={user.street}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="complemento"
              placeholder="Piso y Depto"
              value={user.complemento}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="city"
              placeholder="Ciudad"
              value={user.city}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="country"
              placeholder="Pais"
              value={user.country}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="altaButtons">
            <input
              type="submit"
              className="btn btn-outline-dark"
              value="Actualizar"
            />
            <button
              type="button"
              className="btn btn-outline-danger"
              value="Cancelar"
              onClick={cancelar}
            >
              Cancelar
            </button>
          </div>
        </form>
        <div></div>
        <div>
          Si necesitas actualizar otro dato, por favor contacto a
          soporte@henrybank.com
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
export default connect(mapStateToProps, { getAddress, getProfile })(
  EditUserForm
);
