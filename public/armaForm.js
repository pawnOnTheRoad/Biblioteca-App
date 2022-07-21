
import creaPagForm from '/modulos/functionCreaForm.js'
let elemento = document.getElementById('identificador').firstChild
console.log(elemento.length)
if (elemento.length == 14){
/*14 es el length que corresponde a "Ingresos Socios"
No pude igualarlo de otra manera, se podría mejorar esto
un poco confuso*/ 
creaPagForm('socios','mostrar', 'buscar','editar','borrar');  
}
if (elemento.length == 15){
creaPagForm('libros','mostrar', 'buscar','editar','borrar');
}

