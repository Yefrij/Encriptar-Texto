
function encriptarTexto(){
  let textoIngresado = document.getElementById("texto").value;

  let textoEncritar =textoIngresado
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");

  if (textoEncritar.length != 0){
    muneco.style.display = "none";
    tituloResultado.style.display ="none";
    parrafo.style.display = "none";
    mensaje.innerHTML = textoEncritar;
    btncopiar.style.display = "block";
    mensaje.style.display = "block";
    document.getElementById("texto").value = "";
  }else {
    swal ( "Oops" ,  "Ingrese un texto por favor" ,  "error" );
  }

  document.querySelector('.btncopiar').addEventListener('click', async () => {
    navigator.clipboard.writeText(textoEncritar)
    mensaje.style.display = "none";
    muneco.style.display = "block";
    tituloResultado.style.display ="block";
    parrafo.style.display = "block";
    alert("texto copiado");
  })

}

function desencriptarTexto(){
  let textoEncriptado = document.getElementById("texto").value;

  let textoDesencriptar = textoEncriptado
  .replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u");

  if (textoDesencriptar.length != 0){
    muneco.style.display = "none";
    tituloResultado.style.display ="none";
    parrafo.style.display = "none";
    mensaje.innerHTML = textoDesencriptar;
    btncopiar.style.display = "block";
    mensaje.style.display = "block";
    document.getElementById("texto").value = "";
  }else {
    swal ( "Oops" ,  "Ingrese el texto Cifrado" ,  "error" );
  }  

  document.querySelector('.btncopiar').addEventListener('click', async () => {
    navigator.clipboard.writeText(textoDesencriptar)
    mensaje.style.display = "none";
    muneco.style.display = "block";
    tituloResultado.style.display ="block";
    parrafo.style.display = "block";
  })
}
  



