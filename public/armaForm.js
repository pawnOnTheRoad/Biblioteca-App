
import creaPagForm from '/modulos/functionCreaForm.js';
let elemento = document.getElementById('identificador').textContent;

if (elemento == 'Socios'){
creaPagForm('socios','mostrar', 'buscar','editar','borrar');  
}
if (elemento == 'Libros'){
creaPagForm('libros','mostrar', 'buscar','editar','borrar');
}

