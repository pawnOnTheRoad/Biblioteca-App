import buscar from '/modulos/functionBuscar.js'
let identificador = document.getElementById('identificador').textContent;

if(identificador == 'Buscar Socio'){
    document.getElementById('target').addEventListener('click',function (){buscar ('mostrarsociosjson')})
};

if(identificador =='Buscar Libro'){
    document.getElementById('target').addEventListener('click', function (){buscar ('mostrarlibrosjson')})
}


