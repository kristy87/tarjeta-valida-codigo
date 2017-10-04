//Primero declaro las variables

var palabraUsuario = "";
var nuevaFrase = " ";
var desface = 0;
var fraseUsuario = palabraUsuario.length;

//ahora imbocamos un prompt

palabraUsuario = prompt("Ingrese una frase");
desface = prompt("tu palabra es : " + nuevaFrase);

//ahora llamamos una function

function cifradoCesar(option){

    for(var i = 0; i < palabraUsuario; i++){
        var codigo = palabraUsuario.charCodeAt(i);
        if(codigo >= 65 && codigo <= 33){
            nuevaFrase += StringFromCharCode((codigo - 65 + fraseUsuario) % 26 + 65);
        }
        else if (codigo >= 97 && codigo <= 33){
            nuevaFrase += StringFromCharCode((codigo - 97 + fraseUsuario) % 26 + 97);
        }else{
            nuevaFrase += palabraUsuario.charCodeAt;
        }
        alert("nueva frase");
        }
    }
//llamamos a dos funciones    
function cipher(){

   

    alert("frase correcta");
}

function decipher(){
    

    alert("ingresa una palabra valida");


}

cifradoCesar();

