
let mostrar = (seccion)=>{
    let table = '';
    let body = '';
    let url; 
    let propiedad1; 
    let propiedad2;
    let propiedad3; 
    let propiedad4;
    let propiedad5;
    let propiedad6; 

    switch (seccion){
        case '?seccion=libros':
        propiedad1 = 'Libro_ID',
        propiedad2 = 'Nombre',
        propiedad3 = 'Autor',
        propiedad4 = 'Stock',
        propiedad5 = 'Stock_Disponible',
        propiedad6 = 'Ubicacion'
        table = '<table><caption>Libros</caption><thead><tr><th>ID</th><th>Nombre</th><th>Autor</th><th>Stock</th><th>Stock_Disponible</th><th>Ubicación</th></tr></thead><tbody id="data"></tbody></table>'
        url = 'http://localhost:3000/mostrarlibrosjson';
        break;

        case '?seccion=socios':
        propiedad1 = 'Socio_ID',
        propiedad2 = 'Nombre',
        propiedad3 = 'Apellido',
        propiedad4 = 'Direccion',
        propiedad5 = 'Telefono',
        propiedad6 = 'E_Mail'
        table = '<table><caption>Socios</caption><thead><tr><th>Socio-ID</th><th>Nombre</th><th>Apellido</th><th>Dirección</th><th>Teléfono</th><th>E-mail</th></tr></thead><tbody id="data"></tbody></table>'
        url = 'http://localhost:3000/mostrarsociosjson';
        break;

        case '?seccion=prestamoshistoricos':
        propiedad1 = 'Prestamo_ID',
        propiedad2 = 'Socio_ID',
        propiedad3 = 'Nombre',
        propiedad4 = 'Apellido',
        propiedad5 = 'LibroDevuelto',
        propiedad6 = 'Fecha'
        table = '<table><caption>Préstamos Históricos</caption><thead><tr><th>Préstamo-ID</th><th>Socio-ID</th><th>Nombre</th><th>Apellido</th><th>Libro</th><th>Fecha Devolución</th></tr></thead><tbody id="data"></tbody></table>'
        url = 'http://localhost:3000/prestamoshistoricosjson';
        break;

        case '?seccion=mostrarprestamos':
            propiedad1 = 'Prestamo_ID',
            propiedad2 = 'Socio_ID',
            propiedad3 = 'Nombre',
            propiedad4 = 'Apellido',
            propiedad5 = 'Libro',
            propiedad6 = 'Fecha'
            table = '<table><caption>Préstamos</caption><thead><tr><th>Préstamo-ID</th><th>Socio-ID</th><th>Nombre</th><th>Apellido</th><th>Libro</th><th>Fecha Inicio</th></tr></thead><tbody id="data"></tbody></table>'
            url = 'http://localhost:3000/mostrarprestamosjson';
            break;
    }
   
    document.getElementById('table').innerHTML = table; 
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data));
    
    
    let mostrarData = (data)=>{
        for (let i = 0; i<data.length; i++){
            body += `<tr><td>${data[i][propiedad1]}</td><td>${data[i][propiedad2]}</td><td>${data[i][propiedad3]}</td><td>${data[i][propiedad4]}</td><td>${data[i][propiedad5]}</td><td>${data[i][propiedad6]}</td></tr>`
        }
        
        document.getElementById('data').innerHTML = body;
    }
}

//export default mostrar;