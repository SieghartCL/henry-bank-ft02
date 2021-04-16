<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Proyecto Fintech - Henry Bank

## Español/Spanish:
### Versión de App: 1.0 dev
### Fecha versión: 18-08-2020
### Última modificación por Wolney Sandoval, 16-04-2021
### Descripción:

Henry Bank es el proyecto final realizado por un grupo de estudiantes para la institución [Henry](https://www.linkedin.com/school/soyhenry/) con el fin de graduarse como Full Stack Web developers. Henry Bank es el resultado de un proyecto desafiante construído desde cero, integrando en la misma todos los conocimientos adquiridos durante el programa educativo en [Henry](https://www.linkedin.com/school/soyhenry/).
<br><br>
La aplicación se trata de un Banco Digital en la cual una persona puede transitar por los procesos de registro de usuario, login, envío, recepción y recarga de dinero. Además, es posible realizar transferencias de moneda hacia establecimientos comerciales y operar mediante un CVU (clave virtual uniforme). Es posible agregar a mi lista de contactos otros usuarios de Henry Bank y visualizar mis estadísticas transaccionales de acuerdo a mi actividad en la aplicación.

## Comenzando :rocket:

Este proyecto está dividido en dos grandes secciones correspondientes al Frontend (client) y al Backend (api).
<br><br>
<i>Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.</i>
<br>

## Pre-requisitos :clipboard:

Debes tener instalado [Node.js](https://nodejs.org/es/download/) que incluye el sistema de gestión de paquetes [npm](https://www.npmjs.com/). Además, debes tener instalado el sistema de gestión de bases de datos relacional [PostgreSQL](https://www.postgresql.org/download/)
<br><br>
Es importante tener en cuenta que para correr la aplicación debes generar tu [API Key de Google](https://developers.google.com/maps/documentation/javascript/get-api-key) y requerirlo en la línea 6 en /henry-bank-ft02/api/src/routes/auth.js

```javascript
const { GOOGLE_API_KEY } = 'YOUR GOOGLE API KEY';
```


## Clonar el repo :floppy_disk:

Clonar el repositorio en la ubicación que elijas.

```bash
git clone https://github.com/SieghartCL/henry-bank-ft02.git
```

## Instalación :computer:

En ambos directorios (client y api), debes ejecutar

```bash
npm install --save
```

## Ejecución :boat:

Abrir postgres.

En ambos directorios (client y api), debes ejecutar lo siguiente

```bash
npm start
```
Por defecto, el Frontend se ejecutará en http://localhost:3000 y el Backend en http://localhost:3001
<br><br>

## Cuáles fueron las partes específicas en las que contribuí ❓

### Back End:
- Generación y validación de modelos con PostgreSQL y Sequelize
- Generación y prueba de rutas con PostMan
- Procesos de inicio de sesión, registro y cierre de sesión para Usuarios con los frameworks de Session y Passport.js
- Integración de la API de Google Places para la validación / normalización de calles
- Varias pruebas y validación de rutas de transacciones para trabajar con zonas horarias, diferencias de tiempo y consultas en diferentes rangos de tiempo

### Front End:
- Versión base de la lista de transacciones en el componente React (sin estilo)
- Actualización en el componente Login de React, para el uso del hook useState, función de redireccionamiento e integración de llamadas a la API de axios
- Selector de tipo de transacción en el componente Enviar dinero, con useEffect para renderizado en tiempo real

# Construido con :hammer:

* [PostgreSQL](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Sequelize](https://sequelize.org/)
<br><br>

# Contribuidores :busts_in_silhouette:

* [Cristian Morales](https://www.linkedin.com/in/cristiansmorales/)
* [Diego Bautista]()
* [Júnior Nogueira](https://www.linkedin.com/in/júnior-nogueira-34826261/)
* [Germán Cejas](https://www.linkedin.com/in/german-cejas/)
* [Martín Russo](https://www.linkedin.com/in/martin-russo/)
* [Mauricio Ariel Arizaga Fabregas](https://www.linkedin.com/in/mauricioarielarizaga/)
* [Wolney Sandoval Vejar](https://www.linkedin.com/in/wolney-sandoval-vejar/)

## Inglés/English:
### App Version: 1.0 dev
### Version Date: 18-08-2020
### Last modification by Wolney Sandoval, 16-04-2021
### Description:

Henry Bank is the final project carried out by a group of students for the institution [Henry](https://www.linkedin.com/school/soyhenry/) in order to graduate as Full Stack Web developers. Henry Bank is the result of a challenging project built from scratch, integrating into it all the knowledge acquired during the educational program at [Henry](https://www.linkedin.com/school/soyhenry/).
<br><br>
The application is about a Digital Bank in which a person can go through the processes of user registration, login, sending, receiving and recharging money. In addition, it is possible to make currency transfers to commercial establishments and operate through a CVU (uniform virtual key). It is possible to add other Henry Bank users to my contact list and view my transactional statistics according to my activity in the application.

## Starting :rocket:

This project is divided into two large sections corresponding to the Frontend (client) and the Backend (api).
<br><br>
<i>These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes.</i>
<br>

## Pre-requisites :clipboard:

You must have installed [Node.js](https://nodejs.org/es/download/) which includes the package management system [npm](https://www.npmjs.com/). In addition, you must have installed the relational database management system [PostgreSQL](https://www.postgresql.org/download/)
<br><br>
It is important to note that to run the application you must generate your [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) and require it on line 6 in /henry-bank-ft02/api/src/routes/auth.js

```javascript
const { GOOGLE_API_KEY } = 'YOUR GOOGLE API KEY';
```


## Clone the repo :floppy_disk:

Clone the repository in your chosen location.

```bash
git clone https://github.com/SieghartCL/henry-bank-ft02.git
```

## Installation :computer:

In both directories (client & api), you need to run

```bash
npm install --save
```

## Implementation :boat:

Open postgres.

In both directories (client & api), you need to run

```bash
npm start
```
By default, Frontend will execute in http://localhost:3000 and Backend in http://localhost:3001
<br><br>

## What were the specific parts that I contributed to ❓

### Back End: 
- PostgreSQL & Sequelize models generation and validation
- Routes generation and testing with PostMan
- Login, register and logout processes for Users with Session and Passport.js frameworks
- Google Places API Integration for Street validation/normalization
- Deep Transactions route testing and validation for working with timezone with timestamp differences and time range queries

### Front End:
- Base version of Transactions listing in React component (no styling)
- Update on Login React component, for useState hook, redirect feature and axios API call integration
- Transaction type selector in Send Money component, with useEffect for live rendering

# Built with :hammer:

* [PostgreSQL](https://www.postgresql.org/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Sequelize](https://sequelize.org/)
<br><br>

# Contributors :busts_in_silhouette:

* [Cristian Morales](https://www.linkedin.com/in/cristiansmorales/)
* [Diego Bautista]()
* [Júnior Nogueira](https://www.linkedin.com/in/júnior-nogueira-34826261/)
* [Germán Cejas](https://www.linkedin.com/in/german-cejas/)
* [Martín Russo](https://www.linkedin.com/in/martin-russo/)
* [Mauricio Ariel Arizaga Fabregas](https://www.linkedin.com/in/mauricioarielarizaga/)
* [Wolney Sandoval Vejar](https://www.linkedin.com/in/wolney-sandoval-vejar/)
