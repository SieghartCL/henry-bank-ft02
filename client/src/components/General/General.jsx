import React from 'react'
import './General.css'
import { Link } from 'wouter'
import Container from 'react-bootstrap/Container'


export default function General({transacciones}) {
    return (
        <Container id="generalcont" >
            <div className = 'general' >
                <h4> General </h4>
            </div>
            <div className = 'props' >
                <div className = 'income'>
                    <h5> Ingresos </h5>
                    {transacciones ? 
                    <h3>${transacciones.ingresos}</h3>
                    :
                    <h3 className = 'value' > $ aquí va el valor </h3>
                    } 

                </div>
                <div className = 'expenses' >
                    <h5> Egresos </h5>
                    {transacciones ? 
                    <h3>${transacciones.decrements}</h3>
                    :
                    <h3 className = 'containervalor' > $ aquí va otro valor </h3>
                    } 
                </div>
            </div>
            <div className = "record" >
                <Link to = '1day' className = 'historylink' > Diario </Link>
                <Link to = '7days'  className = 'historylink' > Mensual </Link>
                <Link to = '30days' className = 'historylink' > Anual </Link>
            </div>
        </Container>
    )
}