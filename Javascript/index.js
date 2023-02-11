// El código es para una pizzería, interactuamos con el cliente en caso que éste este interesado.

//funciones:
//calcularPrecios
mostrarMenu
// mostrarPreciosChicas
// mostrarPreciosMedias
// mostrarPreciosGigantes
//buscarVariedad
agregarVariedad
borrarVariedad


let catalogoMenu = document.getElementById("catalogo")
let administrador = document.getElementById("formContainer")

//objetos para la pizzería, en este caso van a ser las variedades de pizzas con sus precios en sus diferentes versiones
//para crear los objetos utilizamos el metodo constructor


// constructor de objetos

class pizza {
    constructor(id, nombre, precioChica, precioMedia, precioGigante, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precioChica = precioChica;
        this.precioMedia = precioMedia;
        this.precioGigante = precioGigante
        this.imagen = imagen
    }
}

const muzza = new pizza (1, "muzza", 950, 1100, 1800, "PIZZOTASFINAL 400.png");
const fugazza = new pizza (2, "fugazza", 1100, 1200, 2100, "PIZZOTASFINAL 400.png");
const jamon = new pizza (3, "jamon", 1100, 1200, 2100, "PIZZOTASFINAL 400.png");
const caprece = new pizza (4, "caprece", 1200, 1200, 2100, "PIZZOTASFINAL 400.png");
const morron = new pizza (5, "morrón", 1200, 1400, 2200,"PIZZOTASFINAL 400.png");
const palmito = new pizza (6, "palmito", 1850, 2000, 3300, "PIZZOTASFINAL 400.png");
const anchoas = new pizza (7, "anchoas", 1500, 1600, 2600, "PIZZOTASFINAL 400.png");
const napolitana = new pizza (8, "napolitana", 1300, 1400, 2400, "PIZZOTASFINAL 400.png");



//array para guardar todas las variedades de pizzas con sus respectivos precios

const menu = [muzza, fugazza, jamon, caprece, morron, palmito,anchoas];

menu.push(napolitana)
console.log(menu)


//funcion para mostrar el menú
function mostrarMenu(array){
    for (let pizza of array){
        console.log(pizza.id, pizza.nombre, pizza.precioChica, pizza.precioMedia, pizza.precioGigante)

    }
}

mostrarMenu(menu)


function mostrarPreciosChicas(array){
    for (let pizzaChica of array){
        console.log(pizzaChica.id, pizzaChica.nombre,"$",pizzaChica. precioChica)
    }
}
//mostrarPreciosChicas(menu)



function mostrarPreciosMedias(array){
    for (let mediaPizza of array){
        console.log(mediaPizza.id, mediaPizza.nombre,"$", mediaPizza. precioMedia)
    }
}
//mostrarPreciosMedias(menu)



function mostrarPreciosGigantes(array){
    for (let pizzaGigante of array){
        console.log(pizzaGigante.id, pizzaGigante.nombre,"$",pizzaGigante.precioGigante)
    }
}
mostrarPreciosGigantes(menu)



//función para buscar los precios por variedad a pedido del cliente:

// function buscarVariedad(array){
    
//     let pedirVariedad = prompt(`elige una variedad para conocer el precio:
//     muzza
//     jamon
//     fugazza
//     palmito
//     anchoas
//     napolitana`)
//     let variedad = array.find((variedad) => variedad.nombre.toLowerCase() == pedirVariedad.toLowerCase() )
//         alert(`"los precios de" ${variedad.nombre} son:
//         $${variedad.precioChica} la pizza chica,
//         $${variedad.precioMedia} la media pizza
//         $${variedad.precioGigante} la pizza gigante`)

// }
//    buscarVariedad(menu) 


     //función map:
     let VariedadesPizza  = menu.map((e) => e.nombre )
     console.log(VariedadesPizza)

// función for each
  menu.forEach((e) =>{
     console.log(`${e.nombre} $ ${e.precioChica}` )
 })


 //ordenamos los precios de menor a mayor
 const menu2 = [];
 const nuevoMenu = menu2.concat(menu)

 console.log(nuevoMenu)
 nuevoMenu.sort((a,b) => a.precioChica - b.precioChica)
 

//función para agregar variedades al menú

function agregarVariedad (array) {
   // nuevoCodigo = prompt(`ingresa el ID`)
   // nuevaVariedad = prompt(`ingresa el nombre de la variedad`)
   // precioChi = prompt (`ingresa el precio de la pizza chica`)
   // precioMed = prompt (`ingresa el precio de la media pizza`)
   // precioGig = prompt (`ingresa el precio de la pizza gigante`)
    //const nuevapizza = new pizza (nuevoCodigo, nuevaVariedad, precioChi, precioMed, precioGig)
    let nuevoCodigo = document.getElementById("inputCod")
    let nuevaVariedad = document.getElementById("inputNombre")
    let precioChi = document.getElementById("inputPrecioChica")
    let precioMed = document.getElementById("inputPrecioMedia")
    let precioGig = document.getElementById("inputPrecioGigante")

    const nuevapizza = new pizza (nuevoCodigo.value, nuevaVariedad.value, precioChi.value, precioMed.value, precioGig.value, "PIZZOTASFINAL 400.png");

    array.push(nuevapizza)
    verMenu(menu)
    console.log(nuevapizza)

    nuevoCodigo.value =""
    nuevaVariedad.value =""
    precioChi.value =""
    precioMed.value =""
    precioMed.value =""
    precioGig.value =""
    
}




function verMenu(array) {

    catalogoMenu.innerHTML = ""
 
for (let pizzas of array){
    let divMenu = document.createElement("div")
    divMenu.className ="col-12 col-md-6 col-lg-4 my-3"
    divMenu.innerHTML = `
    <div class="catalogo">
            <img class="card-img-top img-fluid" style=" width: 180px;"  src="imagenes/${pizzas.imagen}" alt="${pizzas.nombre}">
            <h3 style=" font-size: 1.2rem;">${pizzas.nombre}</h3>
            <h3 style=" font-size: 1.2rem;">Precio Pizza Chica: ${pizzas.precioChica} <input type="radio" name="pizza${pizzas.nombre}" id="pizzaComun" style=" width: 1rem;"></h3>
            <h3 style=" font-size: 1.2rem;">Precio Media Pizza: ${pizzas.precioMedia} <input type="radio" name="pizza${pizzas.nombre}" id="pizzaComun" style=" width: 1rem;"></h3>
            <h3 style=" font-size: 1.2rem;">Precio Pizza Gigante: ${pizzas.precioGigante} <input type="radio" name="pizza${pizzas.nombre}" id="pizzaComun" style=" width: 1rem;"></h3>
            
            <button id="botonComprar ${pizzas.id}" class="btn btn-outline-danger" >Comprar</button>
        </div>
    `
    catalogoMenu.appendChild(divMenu)  
}
}
verMenu(menu)







//función para buscar y borrar la variedad
function borrarVariedad(array){
 let nombreaEliminar = prompt(`ingrese la variedad a eliminar`)
 let arrayNombre = array.map(variedad => variedad.nombre)
 let indice = arrayNombre.indexOf(nombreaEliminar)

 array.splice(indice, 1)
 alert(`eliminaste ${nombreaEliminar}`)
}



administrador.innerHTML= ""

function verAdministrador(){
    administrador.innerHTML= ""
        divForm = document.createElement("div")
        divForm.innerHTML = `
        
            <form  id="cargarPizzas">
                <h2>Cargar variedades de Pizzotas</h2>
                <label class="Label" for="id">Ingrese ID</label>
                <input type="number" name="id" id="inputCod">
                <label class="Label" for="Nombre">Nombre de la pizza</label>
                <input type="text" name="Nombre" id="inputNombre">
                <label class="Label" for="precioChica">Precio de la Pizza Chica</label>
                <input type="number" name="precioChica" id="inputPrecioChica">
                <label class="Label" for="precioMedia">Precio de la Media Pizza</label>
                <input type="number" name="precioMedia" id="inputPrecioMedia">
                <label class="Label" for="precioGigante">Precio de la Pizza Gigante</label>
                <input type="number" name="precioGigante" id="inputPrecioGigante">
                <br>
                <input type="button" class="btn-cargar" id="btnCargar" >
                <br>
                <br>
                <button type="button" class="btn btn-danger" id="salirAdministrador">Salir</button>
            </form>
        
        `

        administrador.appendChild(divForm)

    let btnCargar = document.getElementById("btnCargar")
    btnCargar.onclick = ()=>{
        agregarVariedad(menu)
        }
    let $salirAdministrador = document.getElementById("salirAdministrador")
            $salirAdministrador.onclick = () =>{
            administrador.innerHTML = ""
        }
    
}   




// boton mostrar adminnistrador
    let $mostrarAdministrador = document.getElementById("mostrarAdministrador")
     $mostrarAdministrador.onclick = ()=>{
        verAdministrador()
     }
  
    
     
     



// Acá comienza a correr el programa para el usuario
// let contraseña = prompt(`Si sos administrador ingresa la contraseña, si no, preciona enter y disfruta de las pizzotas`)

// let administrador = true


// // if(contraseña == "pizzotas123"){
// //     do{
// //     let administrar = prompt(`preciona:
// //     1 - para agregar una variedad
// //     2 - para borrar una variedad
// //     3 - para salir`)

//     switch (administrar){
//     case "1":
//         //verAdministrador()
//         agregarVariedad(menu)
//         mostrarMenu(menu)
//             break  
//     case "2":
//         borrarVariedad(menu)
//         mostrarMenu(menu)
//             break
//         case "salir":
//             administrador = false
//             break
//     }
// // }while(administrador)
// // }else{

// let respuestas = true
// //aplicamnos un ciclo do while, en caso de no responder de manera correcta, les vuelve a preguntar
// do{
// let saludo = prompt(`hola, como estás? conoces las PIZZOTAS?
// (responde con "si" o con "no" o escribí "salir" para acceder a la página)`)

// if(saludo == "no" ){
//     let preguntar = prompt("te gustaría conocer sobre nuestras pizzas?")
//     if(preguntar == "si"){
//      switch( preguntar){
//      case "si":
//         alert("nuestras pizzas son gigantes de 12 porciones, podes elegír variedades diferentes en tu pizzota, también hacemos pizzas de 8 porciones comunes")
//      case "si":
//         //reemplazamos con la función buscarVariedad todo el código que estaba dentro del switch, igual lo dejamos comentado para comparar
//         buscarVariedad(menu)
//      case "si":
//         let respuesta3 = true
//         do{
//         let pregunta2 = prompt(`te gustaría conocer otro precio?`)
//         if (pregunta2.toLowerCase() == "si"){
//             buscarVariedad(menu)
//         }else if( pregunta2.toLowerCase() == "no"){
//             respuesta3 = false
//         }else{
//             alert(`debes responder "si" o "no"`)
//         }
//     }while(respuesta3)

       /* let ofrecerMenu = prompt(`te gusta alguna en particular? a continuación coloca el nombre de la variedad que te gusta, tenemos de 
        Muzza, 
        Fugazza, 
        Anchoas, 
        Palmitos, 
        Roquefort, 
        Huevo, 
        morrones, 
        calabresa`) 
        switch(ofrecerMenu) {
            case "muzza":
                alert("la Pizzota de Muzza cuesta $1650")
                break
            case "fugazza":
                alert("la Pizzota de Fugazza cuesta $2100 ") 
                break  
            case "anchoas":
                alert("la Pizzota de Anchoas cuesta $2600")
                    break
            case "palmitos":
                alert("la Pizzota de Palmitos cuesta $3300 ") 
                break 
            case "roquefort":
                alert("la Pizzota de Roquefort cuesta $2400")
                break
            case "huevo":
                alert("la Pizzota de Huevo cuesta $2400 ") 
                break  
            case "morrones":
                alert("la Pizzota de Morrónes cuesta $2200")
                    break
            case "calabresa":
                alert("la Pizzota de Calabresa cuesta $2500 ") 
                break       
        } */
//     case "si" :
//         alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.") 
//         respuestas = false
//     }
//     }else  if(preguntar == "no"){
//     alert("Puedes seguir conociendo nuestra página. Gracias.")
//     respuestas = false
//         }else{
//             alert("Debes responder si o no")
//         }
//  }else if(saludo == "si"){
//     alert("gracias por elegirnos nuevamente!!")
//     respuestas = false
//  }else if ( saludo == "salir"){
//     respuestas = false
//  }else{
//     alert("Debes responder si o no")
    
// }
 

// }while(respuestas)
// // aplicamnos un ciclo do while, en caso de no responder de manera correcta, les vuelve a preguntar
//     let respuestas2 = true

//     do {
//     let saberPrecios = prompt(`te gustaría conocer el precio de las pizzas de diferentes variedades?
//     responde "si" o "no" oescribe "salir" para acceder a la página, `)
//     if (saberPrecios == "si"){
//         alert(" puedes elegir hasta 2 variedades, coloca a continuacion el valor de las variedades que te gusten")
//     let pizza1 = parseInt(prompt(`coloca el precio de la media pizza que te guste. 
//     Muzza $700, 
//     palmitos $1000, 
//     gugazza $800, 
//     jamón $800`));
//     let pizza2 = parseInt(prompt(` coloca el precio de la otra mitad, 
//     Muzza $700, 
//     palmitos $1000, 
//     fugazza $800, 
//     jamón $800`));

// // creamos una función para calcular los precios sacando un promedio del valor de dos pizzas distintas
//     function calcularPrecios (x,y){
  
//     //let suma = pizza1 + pizza2
//     //let resultado = suma / 2
//     //alert("Esa pizza cuesta " + "$" +resultado) 
//     alert("Esa pizza cuesta " + "$" +(x + y) / 2)
//     alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")
//     respuestas2 = false
//  }
//     calcularPrecios(pizza1, pizza2)
    
// }else if(saberPrecios == "no") {
//     alert("Puedes seguir conociendo nuestra página. Gracias.")
//     respuestas2 = false
//         }else if(saberPrecios == "salir"){
//             respuestas2 = false
//         }else{
//             alert("Debes responder si o no")
//         }
        
//     }while(respuestas2)   

// }

  