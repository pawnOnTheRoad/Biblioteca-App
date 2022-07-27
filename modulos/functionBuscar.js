let buscar = (urlFinalJson) => {
    let value1;
    let value2 = '';
    
    let url = 'http://localhost:3000/' + urlFinalJson;
    let propiedad1;
    let propiedad2;
    let propiedad3;
    let propiedad4;
    let propiedad5;
    let propiedad6;
    

    switch (urlFinalJson) {
        case 'mostrarsociosjson':
            propiedad1 = 'Apellido',
            propiedad2 = 'Socio_ID',
            propiedad3 = 'Nombre',
            propiedad4 = 'Direccion',
            propiedad5 = 'Telefono',
            propiedad6 = 'E_Mail',
            value1 = document.getElementById('apellido').value;
            break;
        
        case 'mostrarlibrosjson':
            propiedad1 = 'Nombre',
            propiedad2 = 'Autor',
            propiedad3 = 'Stock',
            propiedad4 = 'Stock_Disponible',
            propiedad5 = 'Ubicacion',
            propiedad6 = 'Libro_ID',
            value1 = document.getElementById('nombre').value,
            value2 = document.getElementById('autor').value;
            break;        
    }
    console.log(value1)
    console.log(value2)
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data));

    let arrayBusqueda = [];
    let arrayBusqueda2 = [];

    let mostrarData = (data) => {
        
        for (let i = 0; i < data.length; i++) {
            let data1 = data[i][propiedad1]; 
            let data2 = data[i][propiedad2]
        
            if (value1.length != 0 && data1.includes(value1)) {
                arrayBusqueda.push(data[i]);
            }
            
           if (value2.length != 0 && data2.includes(value2)){
            arrayBusqueda2.push(data[i]);
            };
            
        }  
        if (arrayBusqueda.length == 0){
            arrayBusqueda = arrayBusqueda2;
        }
        
        
        let body = '';
        for (let i = 0; i < arrayBusqueda.length; i++) {
          if(urlFinalJson == 'mostrarsociosjson') {
            body += `<tr><td>${arrayBusqueda[i][propiedad2]}</td><td>${arrayBusqueda[i][propiedad3]}</td><td>${arrayBusqueda[i][propiedad1]}</td><td>${arrayBusqueda[i][propiedad4]}</td><td>${arrayBusqueda[i][propiedad5]}</td><td>${arrayBusqueda[i][propiedad6]}</td></tr>`;   
        }
        
        if (urlFinalJson == 'mostrarlibrosjson'){
            body += `<tr><td>${arrayBusqueda[i][propiedad6]}</td><td>${arrayBusqueda[i][propiedad1]}</td><td>${arrayBusqueda[i][propiedad2]}</td><td>${arrayBusqueda[i][propiedad3]}</td><td>${arrayBusqueda[i][propiedad4]}</td><td>${arrayBusqueda[i][propiedad5]}</td></tr>`;
           }
           
        }
        console.log(arrayBusqueda)
        document.getElementById('body').innerHTML = body;
        if (arrayBusqueda.length > 0) {
            let table = document.getElementById('table');
            table.style.opacity = 1;
        }
        else {
            table.style.opacity = 0;
            alert('No hay resultados');
        };
        } 
    };


export default buscar; 