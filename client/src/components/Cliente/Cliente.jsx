import React from 'react';
import General from '../General/General.jsx'; 
import './CSS/client.css';
// import Nav from '../General/NavBar.jsx';
export default function Onboarding(){

  const imgMuestra = 'https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-la-persona-by-vexels.png'
  return(
    <div id="cliente">  
      <div className="left">
        <div className="header">
          <div className="perfil">
            <h2>Hola, <span>Henry</span></h2>
            <img src={imgMuestra} width="100px" alt="photo"></img>
          </div>
          <div className="saldo">
            <h3>$2,002.50</h3>
            <p>Balance de mi cuenta</p>
          </div>
        </div>
        <General/>
        <div className="acciones">
          <ul>
            <li>
              <a href="/" className="btn">RECARGAR</a>
            </li>
            <li>
              <a href="/" className="btn">ENVIAR</a>
            </li>
          </ul>     
        </div>
      </div>

      <div className="right">
        <div className="rutas">
          <ul>
            <li>
              <a href="/">TRANSACCIONES</a> 
            </li>
            <li>
              <a href="/">ESTADÍSTICAS</a>           
            </li>
            <li>
              <a href="/">MIS DATOS</a>
            </li>
            <li>
              <a href="/">MIS PRODUCTOS</a>
            </li>
          </ul>   
        </div>
      </div>
    </div>
  )
}

