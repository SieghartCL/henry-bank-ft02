import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import "./Wallets.css";
import OneWallet from "./OneWallet";
import { AllUserWallets, getProfile } from "../../actions/UserActions";
import Button from "react-bootstrap/Button";

function Wallets({ AllUserWallets, getProfile, usuarioConectado, wallets }) {
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (usuarioConectado.id) {
      AllUserWallets(usuarioConectado.id);
    }
  }, [usuarioConectado]);

  const volver = function (e) {
    window.location.replace("http://localhost:3000/cliente");
  };

  return (
    <div id="wallet">
      <Row>
        <h2>WALLET</h2>
        <Col sm={12}>
          <div className="item">
            <div className="props">
              <h4>Tipo</h4>
            </div>
            <div className="props">
              <h4>Divisa</h4>
            </div>
            <div className="props">
              <h4>Balance</h4>
            </div>
            <div className="props">
              <h4>Fecha Creada</h4>
            </div>
          </div>
          {wallets &&
            wallets.map((e) => (
              <OneWallet
                key={e.id}
                type={e.type}
                currency={e.currency}
                balance={e.balance}
                created={e.created}
              />
            ))}
        </Col>
        <div>
          <Button onClick={volver} className="btn btn-dark" variant="top" size="lg">
            {" "}
            Volver
          </Button>
        </div>
      </Row>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    wallets: state.usuario.wallets,
    usuarioConectado: state.usuario.usuarioConectado,
  };
}

export default connect(mapStateToProps, { getProfile, AllUserWallets })(
  Wallets
);
