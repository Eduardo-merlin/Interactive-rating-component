//obteniedo todos los elementos del html con clase button
const listButtonRate = document.querySelectorAll(".button");

//recorro todos los elementos del array
for (let index = 0; index < listButtonRate.length; index++) {

    //se declara una variable del boton del ciclo actual
    const element = listButtonRate[index];

    element.addEventListener("click", function () {
        //obtener boton con clase active
        const buttonActive = document.querySelector(".active");
        //remover clase active del elemento que la tenia previamente 
        buttonActive.classList.remove("active");
        //agregar clase ctive al elemento que se le dio click
        element.classList.add("active");

    });
}
console.log("finalizo carga de javascript")

//obteniendo el elemento del html con la clase button_sub
const buttonSubmit=document.querySelector(".button_sub");


buttonSubmit.addEventListener("click", function(){
    //obtener el elemento del html con clase content_wrapper
    const contentWrapper=document.querySelector(".content_wrapper");
    //leyendo del css de la clase content_wrapper
    contentWrapper.style.display= "flex";
    //obetener el elemento del html con clase rate_selected
    const rateSelected=document.querySelector("#rate_selected");
    //obetener el elemento del boton activo
    const buttonActive = document.querySelector(".active");
    //leer el inerhtml con clase acti y cambiar lo
    rateSelected.innerHTML= buttonActive.innerHTML


})
