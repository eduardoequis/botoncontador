console.log("Esto funciona");

const botonClic = document.getElementById("boton");
let contadorClics = 0;
const contenedorResultado = document.getElementById("resultado");
let cuentaRegresivo = document.getElementById("contador");
cuentaRegresivo.style.display = "none";
let resultado = document.getElementById("resultado")


function sumaClic() {
  if (contadorClics === 0) {
    cuentaRegresivo.style.display = "block";
    resultado.style.display = "none";
    botonClic.textContent = "¡PRESIONA!"
    botonClic.style.backgroundColor = "#F25757"
    document.body.style.backgroundColor = "#F25757";

    contador()
  }
  contadorClics++;
  console.log(contadorClics)
}

botonClic.addEventListener("click", sumaClic);



function contador () { 
  let conteo = 15
  let contador = setInterval(conteoRegresivo, 1000)
  cuentaRegresivo.textContent = conteo + "  segundos";
  function conteoRegresivo() {
    conteo--
    cuentaRegresivo.textContent = conteo + "  segundos";
    console.log(conteo)
      if (conteo <= 0)
        {
          clearInterval(contador);
          console.log("se acabo")
          cuentaRegresivo.style.display = "none";
          resultado.style.display = "block";
          resultado.textContent = contadorClics + " clics";
          botonClic.textContent = "HACÉ CLIC ACÁ PARA COMENZAR"
          document.body.style.backgroundColor = "#7C98B3";
          botonClic.style.backgroundColor = "#7C98B3"
          contadorClics = 0;

        }
    
    
  }

}



