import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import "./Wallets.css";
import OneWallet from "./OneWallet";
import { AllUserWallets, getProfile } from "../../actions/UserActions";

function Wallets({ AllUserWallets, getProfile, usuarioConectado, wallets }) {
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (usuarioConectado.id) {
      AllUserWallets(usuarioConectado.id);
    }
  }, [usuarioConectado]);

  return (
    <div id="transacciones">
      <Row>
        <h2>WALLET</h2>
        <Col sm={12}>
          <div className="item">
            <div className="prop-1">
              <h4>Tipo</h4>
            </div>
            <div className="prop-2">
              <h4>Balance</h4>
            </div>
            <div className="prop-3">
              <h4>Divisa</h4>
            </div>
            <div className="prop-1">
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
