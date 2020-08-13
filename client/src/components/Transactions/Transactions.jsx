import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "./Transactions.css";
import OneTransaction from "./OneTransaction";
import { transactionsHistory, getProfile } from "../../actions/UserActions";

function Transactions({ usuarioConectado, moment, getProfile, history }) {
  const transactioners = transactionsHistory(usuarioConectado.id, moment);

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    transactioners();
    // getProfile();
  }, []);

  console.log(usuarioConectado.id);
  console.log(`Rango Horario: ${moment}`);
  console.log("HISTORIAAAAAAAAAAA: ", history); //ISTORIAAAAAAAAAAA:  history: {income:[], outcome:[] }   __proto__: Object

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
            ))}
            {history &&
            history.outcome.map((transactionsHistory) => (
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
  console.log("state.history");
  console.log(state);
  return {
    history: state.usuario.history,
    usuarioConectado: state.usuario.usuarioConectado,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    transactionsHistory: (data) => dispatch(transactionsHistory(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
