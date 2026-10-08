
// const boton = document.querySelector("#calcular")

// boton.addEventListener( "click" , function(){

//    let  peso = document.querySelector("#peso").value;
//    let  planeta = document.querySelector("#planeta").value;
 
//    let  resultado = peso * planeta;

//    document.querySelector("#resultado").textContent =
//     " Tu peso seria : " + resultado.toFixed (2) + "kg";



// }) 

//  const selector = document.querySelector("#planeta");



//    selector.addEventListener("change", function(){

//       let nombre = selector.options[selector.selectIndex].text;
//       let datos =  document.querySelector("#distancia");

//       document.querySelector("#distancia").textContent = distancia;

//    })




const parrafo = document.getElementById("descripcion");
const boton = document.getElementById("cambiar-idioma");

boton.addEventListener('click', () => {
  
  const esIngles = parrafo.classList.toggle('en');

  parrafo.textContent = esIngles 
    ? parrafo.dataset.en 
    : parrafo.dataset.es;

  parrafo.setAttribute('lang', esIngles ? 'en' : 'es');
});
// let peso_tierra = 80;
// let peso_neptuno = peso_tierra * 2;
// let nombre = "juansho"
// let peso_escogido = "hola"

// if (peso_escogido == peso_neptuno){
//    console.log(" El peso escogido de : " + peso_neptuno + "kg")
// } else if (peso_escogido == peso_tierra){
//    console.log(" El peso escogido es: " + nombre + peso_tierra + "kg")
// } else { console.log( "no hay planeta encontrado ")

// }

// let nombre = "megachan"
// let nombre_1 = "victor"
// let nombre_2 = "juansho"
// let nombre_escogido = nombre_1
// if (nombre_escogido == nombre){
//    console.log("gey")
// }
// else if (nombre_escogido == nombre_1){
//    console.log("cabra")
// }