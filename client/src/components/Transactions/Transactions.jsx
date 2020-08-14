import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory, getProfile } from "../../actions/UserActions";

function Transactions({
  usuarioConectado,
  moment,
  history,
  transactionsHistory,
}) {
  console.log("history");
  console.log(history);
  useEffect(() => {
    transactionsHistory(usuarioConectado.id, moment);
  }, []);

  return (
    <Container className="">
      <Row>
        {console.log("history dentro del return")}
        {console.log(history.income)}
        <Col sm={4}></Col>
        <Col sm={8} className="">
          {/* Ajustar más tarde con orden por fecha descendente */}
          {history.income &&
            history.income
              .reverse()
              .map((e) => (
                <OneTransaction
                  key={e.id}
                  transactionNumber={e.transactionNumber}
                  state={e.state}
                  value={e.value}
                  transactions_type={e.transactions_type}
                />
              ))}
          {history.outcome &&
            history.outcome
              .reverse()
              .map((e) => (
                <OneTransaction
                  key={e.id}
                  transactionNumber={e.transactionNumber}
                  state={e.state}
                  value={e.value}
                  transactions_type={e.transactions_type}
                />
              ))}
        </Col>
      </Row>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    history: state.usuario.history,
    usuarioConectado: state.usuario.usuarioConectado,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    transactionsHistory: (id, moment) =>
      dispatch(transactionsHistory(id, moment)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
