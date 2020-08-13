import React, { useEffect } from 'react';
import General from '../General/General.jsx'; 
import NavBar from '../NavBar/NavBar.jsx';
import './CSS/client.css';
import { connect, useDispatch } from 'react-redux';
import { getProfile, getWallet, getTransactions } from "../../actions/UserActions";
import BotonLogout from "./BotonLogout.jsx";
import { AiFillEdit} from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function Cliente({ usuarioConectado, wallet, transactions, getProfile, getWallet, getTransactions, history }){
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if(usuarioConectado.id){
      getWallet(usuarioConectado.id);
      getTransactions(usuarioConectado.id);
    }
    
  },[usuarioConectado]);

  const imgMuestra = 'https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-la-persona-by-vexels.png'
  
  function editUser(){

        window.location.replace('http://localhost:3000/new/' + usuarioConectado.id)
      
  } 
  
    
  return(
    <Container id="contecliente1"> 
      <div className="contecliente2">
        <div className="header">
          <div className="perfil">
            {usuarioConectado ?           
              <h2>Hola, <span>{usuarioConectado.firstName}   
              <div className="buttonsUser">
                <BotonLogout id="blogout" history={history} title="Log Out"/>
                <AiFillEdit className="btn" type="button" size={60}  onClick={editUser} color="yellow" title="Editar" /> 
              </div>
          <div>
        </div>
              </span></h2>
            :            
              <h2>Hola, <span>Usuario</span></h2>        
            }
       </div>
          {usuarioConectado.firstName!==null && <span>
          <div className="saldo">
            {wallet ? 
              <h3>${wallet.balance}</h3>
            :
              <h3>$2,002.50</h3>
            }      
            <div className="balance">     
            <h3>Balance de mi cuenta</h3>
          </div>
          </div>
          </span>}
          </div> 
          <Image id="ondasclient" src="https://fotos.subefotos.com/e07505b47575212c24ec5fdb5ffc1cb8o.png" ></Image>
          <div className="clientegeneral">
          {usuarioConectado.firstName!==null && <span><General transacciones={transactions}/>
          <div id="navbarcont">
            <NavBar/>
          </div>
          </span>}
          </div>
            {usuarioConectado.firstName===null && 
            <form className="form-signin needs-validation"> 
              <h1>Tu cuenta aún no ha sido activada, por favor, revisa tu mail y sigue los pasos para activarla.</h1>
            </form>}
            <Image id="footerclient" src="https://fotos.subefotos.com/0d5c65b0be7d80bce6ee2187e71c9997o.png" ></Image>
      </div>  
    </Container>
  )
}

function mapStateToProps(state){
  return {
    usuarioConectado: state.usuario.usuarioConectado,
    wallet: state.usuario.wallet,
    transactions: state.usuario.transactions,
  }
}

export default connect(mapStateToProps,{ getProfile, getWallet, getTransactions })(Cliente)