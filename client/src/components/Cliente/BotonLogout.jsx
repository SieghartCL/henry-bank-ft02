import React from "react";
import { connect, useDispatch } from "react-redux";
import { logout } from "../../actions/UserActions";
import { IoMdLogOut } from "react-icons/io";
import { LOGOUT } from "../../constants/userConstants";

function BotonLogout({ logout, usuario, history }) {
  const dispatch = useDispatch();

  function desloguear() {
    logout();
  }

  return (
    <div>
      <IoMdLogOut
        className="btn"
        type="button"
        size={60}
        onClick={desloguear}
        color="red"
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    usuario: state.usuario.usuarioConectado,
  };
}

export default connect(mapStateToProps, { logout })(BotonLogout);
