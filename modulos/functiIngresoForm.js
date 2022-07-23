function ingresoForm (url,app,con){
    app.post(url, function (req,res){
      let body2
      let sql 
      let send = ['Libro ingresado', 'Socio ingresado', 'Préstamo ingresado'];
    
      switch(url){
          case '/libros':
          body2 = {
              nombre: req.body.nombre,
              autor: req.body.autor,
              stock: req.body.stock,
              ubicacion: req.body.ubicacion   
          };
          sql = `INSERT INTO Libros (Nombre, Autor, Stock, Stock_Disponible, Ubicacion) VALUES ("${body2.nombre}","${body2.autor}",${body2.stock},${body2.stock},"${body2.ubicacion}");`;
          send = send[0];
          break;
    
          case '/socios':
              body2 = {
                  nombre: req.body.nombre,
                  apellido: req.body.apellido,
                  direccion: req.body.direccion,
                  telefono: req.body.telefono,
                  e_mail: req.body.e_mail
              }
              sql = `INSERT INTO Socios (Nombre, Apellido, Direccion, Telefono, E_mail) VALUES ("${body2.nombre}","${body2.apellido}","${body2.direccion}",${body2.telefono},"${body2.e_mail}")`;
              send = send[1];
              break;
          case '/prestamos':
              body2 = {
                  libro_id: req.body.libro_id,
                  socio_id: req.body.socio_id
              }
              sql = `INSERT INTO Prestamos (Socio_ID,Libro_ID) VALUES (${body2.socio_id},${body2.libro_id}); 
              UPDATE Libros SET Stock_Disponible = Stock_Disponible -1 WHERE Libro_ID = ${body2.libro_id};`
              send = send[2];
              break;
      }
          
          
          
          con.connect(function(err) {
              if (err) throw err;
              console.log('Conectado a la base de datos');
              con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 registro insertado");
                res.send(send);
              });
            });  
      })
    }

module.exports = ingresoForm; 