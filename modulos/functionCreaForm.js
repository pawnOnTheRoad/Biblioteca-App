//En caso de querer sumar otra accion, 
//sumar un parametro a la funcion y sumar un this en class objetoHtml

let creaPagForm = function creaPagForm(stringObjeto,stringAccion1, stringAccion2,stringAccion3,stringAccion4){

let dominioPrincipal = 'http://localhost:3000/';//cambiar en caso de ser necesario
    
    class formHtml {
      constructor (objetoString, accionString){
        this.href = dominioPrincipal + accionString + objetoString;
        this.buttonValue = accionString + " " + objetoString;
      }  
    }
    
    class objetoHtml {
      constructor(stringObjeto){
        this.accion1 = new formHtml(stringObjeto,stringAccion1);
        this.accion2 = new formHtml(stringObjeto,stringAccion2);
        this.accion3 = new formHtml(stringObjeto,stringAccion3,);
        this.accion4 = new formHtml(stringObjeto,stringAccion4,);
      }}
    
    let objeto = new objetoHtml(stringObjeto);
    let body ='';
    
    let claves = Object.values(objeto);
    
    for (let i = 0; i < claves.length; i++){
    body+=`<div><form><a href= "${claves[i].href}"><input type ="button" value = "${claves[i].buttonValue}"></a></form></div><br><br>`
    };
    document.getElementById('formBody').innerHTML = body;
    console.log(body)
    }
    
    export default creaPagForm;
    