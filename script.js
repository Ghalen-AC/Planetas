const boton = document.querySelector("#calcular")

boton.addEventListener( "click" , function(){

   let  peso = document.querySelector("#peso").value;
   let  planeta = document.querySelector("#planeta").value;
 
   let  resultado = peso * planeta;

   document.querySelector("#resultado").textContent =
    " Tu peso seria : " + resultado.toFixed (2) + "kg";



}) 

 const selector = document.querySelector("#planeta");



   selector.addEventListener("change", function(){

      let nombre = selector.options[selector.selectIndex].text;
      let datos =  document.querySelector("#distancia");

      document.querySelector("#distancia").textContent = distancia;

   })


