const express = require("express");
const app = express();
const port = 3000; 
const mysql = require('mysql2');
const querySql = require('./public/baseDatos');
const functiGetSendFile = require('./modulos/functiGetSendFile');
const functiBorrarRegistros = require('./modulos/functiBorrarRegistros');
const functiIngresoForm = require ('./modulos/functiIngresoForm');
const functijson = require ('./modulos/functiJson');
const functiBuscar = require ('./modulos/functiBuscar');
const functiEditar = require ('./modulos/functiEditar')
const conexiones = require('./public/conexiones');

//Creación conexión mySql

  let con = mysql.createConnection(
    conexiones.con
  );
 
  let sqlCreacion = querySql.createDataBase + querySql.useDataBase + querySql.createTablaLibros + querySql.createTablaSocios + querySql.createTablaPrestamos + querySql.createTablaPrestamosHistoricos;

//Creacion de la Base de Datos y Tablas
  con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado");
  con.query(sqlCreacion, function creacionSql (err, result) {
    if (err) throw err;
    console.log("Database creada");
    });
  });

// Actualización conexión en función async 
// Para que no sea llamada la Base de datos antes de ser creada

async function actualizacionCon (){
  await creacionSql ();
  con = conexiones.conActualizada;
}

// app.use
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public',express.static(__dirname +'/public/'));

//Ruta Index
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html");
});

//Rutas Libros
functiGetSendFile ('libros',app,__dirname);
functiGetSendFile ('mostrarlibros',app,__dirname);
functiGetSendFile ('buscarlibros',app,__dirname);
functiGetSendFile ('borrarlibros',app,__dirname);
functiGetSendFile ('editarlibros',app,__dirname);

//Funciones Libros
functiBorrarRegistros ('libros',app,con);
functiIngresoForm ('/libros',app,con); 
functijson ('/mostrarlibrosjson',app,con);
functiBuscar ('/buscarlibro?',app,con);
functiEditar ('/editarlibros',app,con);

//Rutas Socios
functiGetSendFile('socios',app,__dirname);
functiGetSendFile('mostrarsocios',app,__dirname);
functiGetSendFile('buscarsocios',app,__dirname);
functiGetSendFile ('borrarsocios',app,__dirname);
functiGetSendFile ('editarsocios',app,__dirname);

//Funciones Socios
functiBorrarRegistros ('socios',app,con);
functiIngresoForm ('/socios',app,con); 
functijson ('/mostrarsociosjson',app,con);
functiBuscar ('/buscarsocio?',app,con);
functiEditar ('/editarsocios',app,con);

//Rutas Prestamos

functiGetSendFile('prestamos',app,__dirname);
functiGetSendFile('mostrarprestamos',app,__dirname);
functiGetSendFile('devolucionprestamos',app,__dirname);
functiGetSendFile('prestamoshistoricos',app,__dirname);

//Funciones prestamos
functiBorrarRegistros ('prestamos',app,con);
functiIngresoForm('/prestamos',app,con); 
functijson ('/mostrarprestamosjson',app,con);
functijson ('/prestamoshistoricosjson', app,con);

// Rutas modulos para html

app.get('/modulos/functionCreaForm.js',(req,res)=>{
  res.sendFile(__dirname + '/modulos/functionCreaForm.js');
})

//Servidor Iniciado

app.listen(port,()=>{
    console.log(`Servidor iniciado en puerto ${port}`)
});
