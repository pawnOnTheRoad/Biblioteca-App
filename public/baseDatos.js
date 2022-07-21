
const querySql = {
createDataBase:'CREATE DATABASE IF NOT EXISTS BibliotecaApp; ',
useDataBase:'use BibliotecaApp; ',
createTablaLibros:'CREATE TABLE IF NOT EXISTS Libros (Libro_ID int not null auto_increment, Nombre varchar(50) not null, Autor varchar (50) not null, Stock int not null, Stock_Disponible int not null, Ubicacion varchar (50), primary key(Libro_Id)); ', 
createTablaSocios:'CREATE TABLE IF NOT EXISTS Socios (Socio_ID int not null auto_increment, Nombre varchar(50) not null , Apellido varchar(50) not null, Direccion varchar(50) not null, Telefono varchar(20), E_Mail varchar(50) not null, PRIMARY KEY (Socio_Id)); ',         
createTablaPrestamos:'CREATE TABLE IF NOT EXISTS Prestamos (Prestamo_ID int not null auto_increment, Socio_ID int not null, Libro_Id int not null, Fecha datetime default now(), Primary key(Prestamo_Id)); ',
createTablaPrestamosHistoricos:'CREATE TABLE IF NOT EXISTS PrestamosHistoricos (Devolucion_ID int not null auto_increment, Prestamo_ID int not null, Socio_ID int not null, Libro_Id int not null, Fecha datetime default now(), Primary key(Devolucion_ID)); '
}

module.exports = querySql;

