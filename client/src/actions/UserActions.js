import {
  ADD_USER,
  GET_PROFILE,
  MODIFY_USER,
  GET_WALLET,
  LOGOUT,
  GET_TRANSACTIONS,
  CARGAR_DINERO,
  ENVIAR_DINERO,
  LISTA_CONTACTOS,
  TRANSACTIONS_HISTORY,
  RECARGAR_DINERO,
  ALL_WALLETS,
} from "../constants/userConstants";
import axios from "axios";
import swal from "sweetalert2";

export function addUser(user) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/auth/register", user)
      .then((res) => {
        if (res.status === 200) {
          swal
            .fire({
              title: "¡Registro realizado!",
              text:
                "Se ha enviado un email de validación a " + user.email + " =)",
              icon: "success",
            })
            .then((value) => {
              dispatch({ type: ADD_USER }) &&
                window.location.replace("http://localhost:3000/login");
            });
        }
      })
      .catch(() => {
        swal.fire({
          title: "¡Qué mal!",
          text: "E-mail " + user.email + " ya está en uso =c",
          icon: "error",
        });
      });
  };
}

export function getProfile() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/auth/profileuser", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          return dispatch({ type: GET_PROFILE, payload: res.data });
        }
      });
  };
}

export function getWallet(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/users/wallet/${id}`).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: GET_WALLET, payload: res.data });
      }
    });
  };
}

export function getTransactions(idUser) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/transactions/history/${idUser}`)
      .then((res) => {
        if (res.status === 200) {
          return dispatch({ type: GET_TRANSACTIONS, payload: res.data });
        }
      });
  };
}

export function logout() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/auth/logout")
      .then(async (value) => {
        console.log(value);
        await swal.fire({
          title: "¡Nos vemos pronto!",
          text: "Se ha deslogueado satisfactoriamente",
          icon: "success",
        });
        dispatch({ type: LOGOUT }) &&
          window.location.replace("http://localhost:3000/");
      })
      .catch(async (error) => {
        await swal.fire({
          title: "¡Qué mal!",
          text: "No se pudo desloguear =c",
          icon: "error",
        });
      });
  };
}

export function enviarDinero(from, to, money, transactions_type) {
  return function (dispatch) {
    const myBody = {
      money: money,
      transactions_type: "UsertoUser",
    };
    axios
      .put(
        `http://localhost:3001/transactions/${from}/${to.idContacto}`,
        myBody
      )
      .then((res) => {
        if (res.status === 200) {
          swal
            .fire({
              title: "¡Buen trabajo!",
              text: "Se ha enviado $" + money + " a " + to.nombreContacto,
              icon: "success",
            })
            .then((value) => {
              dispatch({ type: ENVIAR_DINERO }) &&
                window.location.replace("http://localhost:3000/cliente");
            });
        }
      })
      .catch((error) => {
        swal.fire({
          title: "¡Qué mal!",
          text: "data.message",
          icon: "error",
        });
      });
  };
}

export function listaContactos(idContact) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/users/${idContact}`).then((res) => {
      if (res.status === 200) {
        return dispatch({
          type: LISTA_CONTACTOS,
          payload: {
            nombreContacto: res.data.firstName + " " + res.data.lastName,
            idContacto: res.data.id,
          },
        });
      }
    });
  };
}

export function getAddress(address, id, user) {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/auth/validate/street", address)
      .then((res) => {
        if (res.status === 200) {
          axios
            .put(`http://localhost:3001/users/modify/${id}`, user)
            .then((res) => {
              if (res.status === 200) {
                dispatch({ type: MODIFY_USER, payload: res.data });
                swal
                  .fire({
                    title: "¡Buen trabajo!",
                    text: "Tus datos fueron ingresados correctamente",
                    icon: "success",
                  })
                  .then((value) => {
                    window.location.replace("http://localhost:3000/cliente");
                  });
              }
            });
        }
      })
      .catch((error) => {
        swal.fire({
          title: "¡Qué mal!",
          text: "La dirección ingresada no es válida =(",
          icon: "error",
        });
      });
  };
}

export function cargarDinero(id, value) {
  console.log(value);
  axios
    .post(`http://localhost:3001/transactions/loadBalance/${id}`, { value })
    .then((res) => {
      console.log(res.data);
      swal
        .fire({
          title: "Recarga exitosa!",
          icon: "success",
        })
        .then(() => {
          window.location.replace("http://localhost:3000/cliente");
        });
    })
    .catch((res) => {
      swal.fire({
        title: "Error",
        text: "No se pudo recargar dinero",
        icon: "error",
      });
    });
}

export function transactionsHistory(id, moment) {
  return function (dispatch) {
    axios
      .get(
        `http://localhost:3001/transactions/history/time/${id}?moment=${moment}`
      )
      .then((result) => {
        dispatch({ type: TRANSACTIONS_HISTORY, payload: result.data });
      })
      .catch((error) => {
        swal.fire({
          title: error,
          text: "Hubo un error inesperado.",
          icon: "error",
        });
      });
  };
}
export function AllUserWallets(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/wallet/myWallets/${id}`).then((result) => {
      return dispatch({ type: ALL_WALLETS, payload: result.data });
    });
  };
}
