import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { IoIosPaperPlane } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { RiDownload2Line } from "react-icons/ri";
import { RiUpload2Line } from "react-icons/ri";
import { RiProductHuntLine } from "react-icons/ri";
import "./navbar.css";

const NavBar = () => {
  return (
    <Container id="conteinernavbar">
      <Navbar className="contenavbar">
        <div className="conttop">
          <Button className="buttonSB" href="/transactions" type="button">
            <IoIosPaperPlane size="32" />
            Transacciones
          </Button>
          <Button className="buttonSW" href="/stadistics" type="button">
            <BsGraphUp size="32" />
            Estadisticas
          </Button>
          <Button className="buttonSW" href="/myinfo" type="button">
            <MdLanguage size="32" />
            Mis Datos
          </Button>
          <Button className="buttonSB" href="/myproducts" type="button">
            <RiProductHuntLine size="32" />
            Mis Productos
          </Button>
        </div>
        <div className="contbot" align="center">
          <Button className="buttonRB" href="/montorecarga" type="button">
            <RiDownload2Line size="32" />
            Recargar Dinero
          </Button>
          <Button className="buttonWR" href="/enviar" type="button">
            <RiUpload2Line size="32" />
            Mandar Dinero
          </Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default NavBar;
