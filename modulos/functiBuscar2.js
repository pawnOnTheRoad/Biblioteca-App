function buscar(url,app,con){
    app.get(url, (req,res)=>{
        let sql
        let query1 = '';
        let query2 = '';
        switch (url){
            case '/buscarlibro?':
                query1 = req.query.libro;
                query2 = req.query.autor;
                sql = `SELECT * from Libros WHERE Autor LIKE "%${query2}%" OR Nombre LIKE "%${query1}%";`;
                break;
            case '/buscarsocio?':
                query1 = req.query.apellido;
                sql = `SELECT * from Socios WHERE Apellido LIKE "%${query1}%";`
                break;
        }       
    /*Esto lo hice para evitar que al dejar uno de los 
  campos en blanco, se seleccionen todos los ingresos.
  Tal vez haya una forma mejor, por el momento espero 
  que no aparezca ningún superheroe que se llame
  SUPER ZÑZ */
if (url == '/buscarlibro?' && query1 == ''){
    query1 = 'zñz';
};
if(url == '/buscarlibro?' && query2 == ''){
    query2 = 'zñz';
};
        con.connect();
        con.query(sql, (err,results,fields)=>{
          if (err) throw err;
          res.send(results)
        })
      })
}

module.exports = buscar; 