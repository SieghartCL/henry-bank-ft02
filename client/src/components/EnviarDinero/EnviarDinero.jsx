import React, { useState, useEffect } from 'react';
import './enviardinero.css';
import Button from 'react-bootstrap/Button';
import { FaUsers , FaUserPlus} from "react-icons/fa";
import { connect } from 'react-redux';
import { getProfile, enviarDinero, listaContactos } from "../../actions/UserActions";
import SearchContact from "./searchContact.js";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function RecargarDinero({ usuarioConectado, getProfile, enviarDinero, listContact, listaContactos }) {

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
  if(usuarioConectado.contacts){
    usuarioConectado.contacts.map(value => {
     listaContactos(value)
    })
  }
  }, [usuarioConectado])

  const [cantidad, setCantidad] = useState(0); 
  
  const addcontactos = function (e) {
    window.location.replace('http://localhost:3000/contactos')
 }

  return (  
      <Container id="enviarcont">  
      <Image id="henrybankenviar" src="https://fotos.subefotos.com/64bf11a0a60617c000baae47b53883fbo.png " ></Image>
        <div className="form-group col-md-5 envia">
          <div class="input-group mb-3 destino">
            <div class="input-group-prepend">
              <button class="input-group-text" id="basic-addon1">
                <FaUserPlus size="30" onClick={addcontactos}/>
              </button>
            </div>
            {usuarioConectado.contacts && usuarioConectado.contacts.length !== 0? 
              <SearchContact misContactos={listContact}/>
            :
              <input type="text" class="form-control" placeholder="Aún no tiene contactos" disabled/>
            }
          </div>
          <div className="total">
          <h1>${cantidad}</h1>
          </div>
          <div class="input-group input-group-sm mb-3">
            <input type="number" max="100000" min ="0" class="form-control mensaje" placeholder="Modificar Cantidad" 
              onInput={e => setCantidad(e.target.value)} 
            />
          </div>
          <div class="form-check confirmar">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              Acepto usar la sección amigos solo con fines personales, no comerciales
            </label>
          </div>
          <div className="send">
          {usuarioConectado.contacts && usuarioConectado.contacts.length !== 0 ?
              <Button className="btn btn-dark" href="/cliente" size="lg"
                onClick={() => {
                  const nombre = document.getElementById('myInput').value;
                  for( let i = 0; i < listContact.length; i++ ){
                    if (listContact[i].nombreContacto === nombre) {
                      enviarDinero(usuarioConectado.id, listContact[i].idContacto, cantidad)
                    }
                  }
                }}
              >Enviar Dinero</Button>
            :
              <Button className="btn btn-dark" href="/cliente" size="lg">Atrás</Button>
            }
          </div>
        </div>
        <Image id="footerenviar" src="https://fotos.subefotos.com/0d5c65b0be7d80bce6ee2187e71c9997o.png" ></Image>
    </Container>
  )
}

function mapStateToProps(state){
  return {
    usuarioConectado: state.usuario.usuarioConectado,
    listContact: state.usuario.listContact,
  }
}

export default connect(mapStateToProps,{ getProfile, enviarDinero, listaContactos })(RecargarDinero);