function json (url,app,con){
    app.get(url,(req,res)=>{
        let sql
        switch (url){
            case '/mostrarprestamosjson':
                sql = 'SELECT Prestamos.Prestamo_ID, Prestamos.Socio_ID, Socios.Apellido, Libros.Nombre AS Libro from Prestamos INNER JOIN Socios ON Prestamos.Socio_ID = Socios.Socio_ID INNER JOIN Libros ON Prestamos.Libro_ID = Libros.Libro_ID;'
            break;
            case '/mostrarlibrosjson':
                sql = 'SELECT * from Libros';
            break;
            case '/mostrarsociosjson':
                sql = 'SELECT * from Socios';
            break;
            case '/prestamoshistoricosjson':
                sql = 'SELECT PrestamosHistoricos.Prestamo_ID, PrestamosHistoricos.Socio_ID, Socios.Nombre, Socios.Apellido, Libros.Nombre AS LibroDevuelto, PrestamosHistoricos.Fecha FROM PrestamosHistoricos INNER JOIN Socios ON PrestamosHistoricos.Socio_ID = Socios.Socio_ID INNER JOIN Libros ON PrestamosHistoricos.Libro_ID = Libros.Libro_ID;';
            break;
        }

        con.connect();
        con.query(sql,(err,results, fields)=>{
          if (err) throw err;
          res.send(results);
        })
      })
}

module.exports = json;