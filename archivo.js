let urlBase="https://rickandmortyapi.com/api"
let characters= "/character"
let locations= "/location"
let episodes= "/episode"
let cartas=document.querySelector("#cartas")
let recorrer="?page="



const personajes=()=> {
    fetch(`${urlBase}${characters}`)//api personajes//
    .then(response=>response.json())//de json=>objetos//
    .then(data=>cardsPersonaje(data.results))
   // for (let i = 1; i <42; i++) {
               
    //}
    
   
}
let modal=document.getElementById("modal")
personajes()
const ubicacion=()=> {
    fetch(`${urlBase}${characters}`)//api personajes//
    .then(response=>response.json())//de json=>objetos//
    
    .then(data=>console.log(data.results))

    }
            
ubicacion()
const episodios=()=> {
    fetch(`${urlBase}${characters}`)//api personajes//
    .then(response=>response.json())//de json=>objetos//
    .then(data=>console.log(data.results))
    
}
episodios()
//dom con for-of
const cardsPersonaje=(personajes)=>{
    for (const personaje of personajes) {
        console.log(personaje.name)
    const{name,image,id,species,status}=personaje
    cartas.innerHTML+=`<div class="card col-4 m-5" id="cartaindividual" style="width: 18rem;">
    <img src="${image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text"><h1>${name}.</h1></p>
      <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>identificación:</b> ${id}</li>
      <li class="list-group-item"><b>especies:</b> ${species}</li>
      <li class="list-group-item"><b>Estado: </b>${status}</li>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnbtn">
        <b>Tu tarjeta de ${name} </b>
      </button>`
     
      modal.innerHTML=`<!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
             
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            //modal
            
            <div class="card col-4 m-5" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text"><h1>${name}.</h1></p>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>identificación:</b> ${id}</li>
              <li class="list-group-item"><b>especies:</b> ${species}</li>
              <li class="list-group-item"><b>Estado: </b>${status}</li>
           
           
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
              <button type="button" class="btn btn-primary">comprar</button>
            </div>
          </div>
        </div>
      </div>

    </ul>
    
      </div>
  </div>`
    }
};
//const especie=()=>{
//cartas.innerHTML+=`cardsPersonaje().filter(data.results.includes("human"))`
//console.log("hola")
//}
let filtro=document.querySelector("#filter")
let btnFilter=document.querySelector("#btnFilter")
arraypersonajes=[]
const filtrarPersonajes=(e)=> {
  e.preventDefault()
  fetch(`${urlBase}${characters}`)//api personajes//
  .then(response=>response.json())//de json=>objetos//
  .then(data=>cardsPersonajeFiltrado(data.results))
  
  //.then(data=>{let dataresults=data.results
  //  let dataresultsmap=dataresults.map(dataresult=>dataresult.name)
  //  cardsPersonajeFiltrado(dataresultsmap)
  //  })
 
 }
 const cardsPersonajeFiltrado=(data)=>{
  let ingresado=filtro.value
  cartas.innerHTML=""
  arraypersonajes=data.map(dato=>dato)
  for (const personaje of arraypersonajes) {

    //filtro status
    if(personaje.status==ingresado){
      console.log("hola")
      const{name,image,id,species,status}=personaje
     
  cartas.innerHTML+=`<div class="card col-4 m-5" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text"><h1>${name}.</h1></p>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><b>identificación:</b> ${id}</li>
  <li class="list-group-item"><b>especies:</b> ${species}</li>
  <li class="list-group-item"><b>Estado: </b>${status}</li>`
      
      
    }
    //filtro especies
   else if(personaje.species==ingresado){
      console.log("hola")
      const{name,image,id,species,status}=personaje
     
  cartas.innerHTML+=`<div class="card col-4 m-5" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text"><h1>${name}.</h1></p>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><b>identificación:</b> ${id}</li>
  <li class="list-group-item"><b>especies:</b> ${species}</li>
  <li class="list-group-item"><b>Estado: </b>${status}</li>`
      
      
    } 
        //filtro genero
   else if(personaje.gender==ingresado){
    console.log("hola")
    const{name,image,id,species,status}=personaje
   
cartas.innerHTML+=`<div class="card col-4 m-5" style="width: 18rem;">
<img src="${image}" class="card-img-top" alt="...">
<div class="card-body">
<p class="card-text"><h1>${name}.</h1></p>
<ul class="list-group list-group-flush">
<li class="list-group-item"><b>identificación:</b> ${id}</li>
<li class="list-group-item"><b>especies:</b> ${species}</li>
<li class="list-group-item"><b>Estado: </b>${status}</li>`
    
    
  } 
  else {
    cartas.innerHTML=`<h1>No se encontro resultados</h1>`
    personajes()
    break;
  }
  }
    //console.log(arraypersonajes)
 }
 
  


btnFilter.addEventListener("click",filtrarPersonajes)
