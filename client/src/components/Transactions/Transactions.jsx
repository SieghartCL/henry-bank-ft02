import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory, getProfile } from "../../actions/UserActions";
import { MdCallToAction } from "react-icons/md";

function Transactions({
  usuarioConectado,
  moment,
  getProfile,
  history,
  transactionsHistory,
}) {
  // const transactioners = transactionsHistory(usuarioConectado.id, moment);

  useEffect(() => {
    console.log("Usuario conectado: ", usuarioConectado);
    console.log("Moment: ", moment);
    transactionsHistory(usuarioConectado.id, moment);
  }, []);
  return (
    <Container className="">
      <Row>
        <Col sm={4}></Col>
        <Col sm={8} className="">
          {/*   {history &&
            history.income.map((transactionsHistory) => (
              <OneTransaction
                key={transactionsHistory.id}
                state={transactionsHistory.state}
              />
            ))}*/}
          {/*  {history.outcome.map((transactionsHistory) => (
            <OneTransaction
              key={transactionsHistory.id}
              state={transactionsHistory.state}
            />
          ))} */}
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
