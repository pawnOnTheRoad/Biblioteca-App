function editar (url,app,con){
    app.post(url,(req,res)=>{
        let query_id;
        let query1;
        let query2;
        let query3;
        let sql1;
        let sql2;
        let sql3;
        
        switch(url){
            case '/editarlibros':
                query_id = req.body.libro_id;
                query1 = req.body.nuevostock;
                query2 = req.body.nuevaubicacion;
                sql1 = `UPDATE Libros SET stock = stock + ${query1} WHERE Libro_ID = ${query_id}; UPDATE Libros SET stock_disponible = stock_disponible + ${query1} WHERE Libro_ID = ${query_id};`;
                sql2 = `UPDATE Libros SET Ubicacion = "${query2}" WHERE Libro_ID = ${query_id};`;
                break;
            case '/editarsocios':
                query_id = req.body.socio_id;
                query1 = req.body.nuevadireccion;
                query2 = req.body.nuevotelefono;
                query3 = req.body.nuevocorreo;
                sql1 = `UPDATE Socios SET Direccion = "${query1}" WHERE Socio_ID = ${query_id};`;
                sql2 = `UPDATE Socios SET Telefono = "${query2}" WHERE Socio_ID = ${query_id};`;
                sql3 = `UPDATE Socios SET E_mail = "${query3}" WHERE Socio_ID = ${query_id}`;
                break;

            }
            let sql = ''
            if (query1.length > 0){
                sql = sql1;
            }
            if (query2.length > 0){
                sql += sql2;
            }
            if (query3.length >0){
                sql += sql3;
            }

            console.log(sql);
            
            con.connect(function(err) {
                if (err) throw err;
                console.log('Conectado a la base de datos');
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("Registro Editado");
                  res.send('Registro Editado');
                });
              });  
    })
}

//Falta solucionar el hecho de que un usuario aprete 
//el boton editar si no hay ningun campo, ver checkValidity()
module.exports = editar; 

