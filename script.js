const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario(){
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if(nombre.value.length < 4 ){
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if(!valido){
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "enviado";
    }
    return valido;
}
 form.addEventListener("submit", (e) => {
    if (validarFormulario()){
        // Si la validacion es exitosa, puedes enviar el formulario 
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formlario se envie automaticamente
    }
 });