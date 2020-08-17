import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory, getProfile } from "../../actions/UserActions";
import Button from "react-bootstrap/Button";

function Transactions({
  moment,
  getProfile,
  usuarioConectado,
  history,
  transactionsHistory,
}) {
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (usuarioConectado.id) {
      transactionsHistory(usuarioConectado.id, moment);
    }
  }, [usuarioConectado]);

  const volver = function () {
    window.location.replace("http://localhost:3000/cliente");
  };

  // a elección
  const titulo = {
    day: "DE HOY",
    week: "DE LA SEMANA",
    month: "DEL MES",
  };
  return (
    <div id="transacciones">
      <Row>
        <h2>TRANSACCIONES {titulo[moment]}</h2>
        <Col sm={12}>
          <div className="item">
            <div className="prop-1">
              <h4>Transacción</h4>
            </div>
            <div className="prop-2">
              <h4>Tipo Transacción</h4>
            </div>
            <div className="prop-3">
              <h4>Valor</h4>
            </div>
            <div className="prop-4">
              <h4>Estado</h4>
            </div>
            <div className="prop-5">
              <h4>Fecha Realizada</h4>
            </div>
          </div>
          <h2>INGRESOS</h2>
          {history.income &&
            history.income.filter((e) => 
              e.transactions_type !== "Transferencia Bancaria" && 
              e.transactions_type !== "Pago Comercio").map((e) => (
              <OneTransaction
                color="income"
                type="+"
                key={e.id}
                transactionNumber={e.transactionNumber}
                createdAt={`${e.createdAt.split("T")[0]} ${
                  e.createdAt.split("T")[1].split(".")[0]
                }`}
                state={e.state}
                value={e.value}
                transactions_type={e.transactions_type}
              />
            ))}
          <h2>EGRESOS</h2>
          {history.outcome &&
            history.outcome.map((e) => (
              <OneTransaction
                color="outcome"
                type="-"
                key={e.id}
                transactionNumber={e.transactionNumber}
                createdAt={`${e.createdAt.split("T")[0]}, ${
                  e.createdAt.split("T")[1].split(".")[0]
                }`}
                state={e.state}
                value={e.value}
                transactions_type={e.transactions_type}
              />
            ))}
        </Col>
        <div>
          <Button
            onClick={volver}
            className="btn btn-dark"
            variant="top"
            size="lg"
          >
            Volver
          </Button>
        </div>
      </Row>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    history: state.usuario.history,
    usuarioConectado: state.usuario.usuarioConectado,
  };
}

export default connect(mapStateToProps, { getProfile, transactionsHistory })(
  Transactions
);
