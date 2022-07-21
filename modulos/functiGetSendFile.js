/*Funcion para crear los get que envian archivos html
Escribir sin tipo de archivo. 
Ejemplo en libros.html el  parámetro sería 'libros'
Es fundamental que el nombre del archivo sea el mismo 
que la url */

function creaGetSendFile (stringArchivo,app,__dirname) 
{app.get('/' + stringArchivo, (req,res) =>{
res.sendFile(__dirname +"/" + stringArchivo + ".html")
}
)}; 


module.exports = creaGetSendFile;