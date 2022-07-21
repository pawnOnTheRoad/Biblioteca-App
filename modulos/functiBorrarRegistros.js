
//Posibles parametros seccion libros y socios

function borrarRegistros (stringSeccion,app,con) {
    let borrar_id
    let table
    let registro_id
    let url
    
    switch (stringSeccion) {
        case 'libros':
            table = 'Libros';
            registro_id = 'Libro_ID';
            url = '/borrarlibro';
            break;
        case 'socios':
            table = 'Socios';
            registro_id = 'Socio_ID';
            url = '/borrarsocio';
            break;
        case 'prestamos':
            table = 'Prestamos'
            registro_id = 'Prestamos_ID'
            url = '/devolucionprestamos';
            break;
        default:console.log('Esa sección no existe')
            break;
    }
    app.post(url, (req,res) =>{
        borrar_id = req.body.borrar_id;
    con.connect((err)=>{
        if (err) throw err;
        console.log('Conectado a la base de datos');
        let sql
        if (url == '/devolucionprestamos' ){
           sql = `UPDATE Libros SET Stock_Disponible = Stock_Disponible + 1 WHERE Libro_ID = (Select Libro_ID from Prestamos Where Prestamo_ID = ${borrar_id});
           INSERT INTO PrestamosHistoricos (Prestamo_ID,Socio_ID,Libro_ID) SELECT Prestamo_ID,Socio_ID,Libro_Id FROM Prestamos WHERE Prestamo_ID = ${borrar_id};
           DELETE FROM prestamos WHERE Prestamo_ID = ${borrar_id};` 
        }
        else sql = `DELETE FROM ${table} WHERE ${registro_id} = ${borrar_id}`;
        console.log(borrar_id);
    con.query(sql, (err,results)=>{
        if (err) throw err;
        console.log('1 Registro Eliminado');
        res.send('Registro Eliminado');
    })
    })
    })
}

module.exports = borrarRegistros;