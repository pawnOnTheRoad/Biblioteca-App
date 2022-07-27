
import creaPagForm from '/modulos/functionCreaForm.js';
let elemento = document.getElementById('identificador').textContent;

if (elemento == 'Socios'){
/*14 es el length que corresponde a "Ingresos Socios"
No pude igualarlo de otra manera, se podría mejorar esto
un poco confuso*/ 
creaPagForm('socios','mostrar', 'buscar','editar','borrar');  
}
if (elemento == 'Libros'){
creaPagForm('libros','mostrar', 'buscar','editar','borrar');
}

