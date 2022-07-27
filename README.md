# Biblioteca-App (proyecto en desarrollo)
App que permite al administrador de una biblioteca registrar libros, socios y préstamos de la biblioteca. 
También maneja el stock de libros al realizar un préstamo y al devolverlo.
Para su funcionamiento es necesario tener mysql instalado. También descargar los módulos express y mysql2 de node JS
La aplicación aún no está terminada. Los próximos objetivos son:

- incluir la posiblidad de editar los ingresos de libros y socios. ¡Realizado!
- que al utilizar la función "buscar" los resultados sean mostrados en una tabla html (por el momento se presentan en json). ¡Realizado!
- reducir la cantidad de archivos html. Me parece que se podría tener un archivo html para todas las secciones mostrar y no 3 html diferenciados como ahora.
- mejorar la estética de la app, aplicando estilos.
- incluir el envío de un correo electrónico al socio con su id al registrarse y otro al realizar algún préstamo.
- en la sección Buscar Libros poder buscar utilizando los dos parámetros (Nombre y Autor).

A largo plazo me gustaría:
- tener un sistema de autentificación para socios y usuarios.
- que los socios puedan acceder al listado de libros disponibles y a sus préstamos.
- realizar algún sistema para registrar el pago de cuotas de los socios. 
