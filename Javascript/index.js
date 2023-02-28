// El código es para una pizzería, interactuamos con el cliente en caso que éste este interesado.


//calcularPrecios
//mostrarMenu
mostrarPreciosChicas
mostrarPreciosMedias
mostrarPreciosGigantes
//buscarVariedad
agregarVariedad
borrarVariedad


let catalogoMenu = document.getElementById("catalogo")
let administrador = document.getElementById("formContainer")
let precioElegida = document.querySelector("input[name=precioPizza]:checked");
let precioPizza = document.getElementsByName("precioPizza")     
let modalCarrito = document.getElementById("modalBody")
let btnNavCarrito = document.getElementById("btnNavCarrito")
let precioTotal = document.getElementById("precioTotal")
let finalizarCompra = document.getElementById("finalizarCompra")

let productosEnCarrito 
if (localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}


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

// const muzza = new pizza (1, "muzza", 950, 1100, 1800, "PIZZOTASFINAL400.png");
// const fugazza = new pizza (2, "fugazza", 1100, 1200, 2100, "PIZZOTASFINAL400.png");
// const jamon = new pizza (3, "jamon", 1100, 1200, 2100, "PIZZOTASFINAL400.png");
// const caprece = new pizza (4, "caprece", 1200, 1200, 2100, "PIZZOTASFINAL400.png");
// const morron = new pizza (5, "morrón", 1200, 1400, 2200,"PIZZOTASFINAL400.png");
// const palmito = new pizza (6, "palmito", 1850, 2000, 3300, "PIZZOTASFINAL400.png");
// const anchoas = new pizza (7, "anchoas", 1500, 1600, 2600, "PIZZOTASFINAL400.png");
// const napolitana = new pizza (8, "napolitana", 1300, 1400, 2400, "PIZZOTASFINAL400.png");
let menu = []
 const menuPizzeria = async () => {
    const resp = await fetch ("Javascript/menu.json")
    const menuPizzotas = await resp.json()
    console.log(menuPizzotas)
    for (let pizzas of menuPizzotas){
        let pizzota = new pizza (pizzas.id, pizzas.nombre, pizzas.precioChica, pizzas.precioMedia, pizzas.precioGigante, pizzas.precioGigante, pizzas.imagen);
        menu.push(pizzota)
        
    }
    localStorage.setItem("menuPizzas", JSON.stringify(menu))
 }

//array para guardar todas las variedades de pizzas con sus respectivos precios


if ( localStorage.getItem("menuPizzas")){
    menu = JSON.parse(localStorage.getItem("menuPizzas"))
}else{
    //menu.push(muzza, fugazza, jamon, caprece, morron, palmito,anchoas);
    menuPizzeria()

}

console.log(menu)
 

//funcion para mostrar el menú
// function mostrarMenu(array){
//     for (let pizza of array){
//         console.log(pizza.id, pizza.nombre, pizza.precioChica, pizza.precioMedia, pizza.precioGigante)

//     }
// }

//mostrarMenu(menu)


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
// mostrarPreciosGigantes(menu)



//función para buscar los precios por variedad a pedido del cliente:

function buscarVariedad(array){
    
    let pedirVariedad = prompt(`elige una variedad para conocer el precio:
    muzza
    jamon
    fugazza
    palmito
    anchoas
    napolitana`)
    let variedad = array.find((variedad) => variedad.nombre.toLowerCase() == pedirVariedad.toLowerCase() )
        alert(`"los precios de" ${variedad.nombre} son:
        $${variedad.precioChica} la pizza chica,
        $${variedad.precioMedia} la media pizza
        $${variedad.precioGigante} la pizza gigante`)

}

function alertaCompra(){
    swal({
        title: "Seguro quieres realizar la compra?",
        text: `estas a unos pasos de comer algo delicioso!!`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((compra) => {
        if (compra) {
          swal("Felicidades!! tu comida está en camino!", {
            icon: "success",
          });
        } else {
          swal("tus pedidos siguen en el carrito");
        }
      });
    }
//    buscarVariedad(menu) 


     //función map:
    //  let VariedadesPizza  = menu.map((e) => e.nombre )
    //  console.log(VariedadesPizza)

// función for each
//   menu.forEach((e) =>{
//      console.log(`${e.nombre} $ ${e.precioChica}` )
//  })


 //ordenamos los precios de menor a mayor
//  const menu2 = [];
//  const nuevoMenu = menu2.concat(menu)

//  //console.log(nuevoMenu)
//  nuevoMenu.sort((a,b) => a.precioChica - b.precioChica)
 

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

    const nuevapizza = new pizza (nuevoCodigo.value, nuevaVariedad.value, parseInt(precioChi.value), parseInt(precioMed.value), parseInt(precioGig.value), "PIZZOTASFINAL400.png");

    array.push(nuevapizza)
    verMenu(menu)
    console.log(nuevapizza)

    localStorage.setItem("menuPizzas", JSON.stringify(array))
    
    formid = document.getElementById("cargarPizzas")
    formid.reset()
    // nuevoCodigo.value =""
    // nuevaVariedad.value =""
    // precioChi.value =""
    // precioMed.value =""
    // precioMed.value =""
    // precioGig.value =""
    
    
}






function verMenu(array) {

    catalogoMenu.innerHTML = ""
 
for (let pizzas of array){
    let divMenu = document.createElement("div")
    divMenu.className ="col-12 col-md-6 col-lg-4 my-3"
    divMenu.innerHTML = `
    <div class="catalogo border border-danger">
            <img class="card-img-top d-block mx-auto img-fluid m-1" style=" width: 180px;"  src="./imagenes/${pizzas.imagen}" alt="${pizzas.nombre}">
            <h3 style=" font-size: 1.2rem; margin-left: 1rem;">${pizzas.nombre}</h3>
            <h3 style=" font-size: 1.2rem; margin-left: 1rem;">Precio Pizza Chica: ${pizzas.precioChica} <input type="radio" value="${pizzas.precioChica}" name="precioPizza" id="pizzaComun" style=" width: 1rem;"></h3>
            <h3 style=" font-size: 1.2rem; margin-left: 1rem;">Precio Media Pizza: ${pizzas.precioMedia} <input type="radio" value="${pizzas.precioMedia}" name="precioPizza" id="pizzaComun" style=" width: 1rem;"></h3>
            <h3 style=" font-size: 1.2rem; margin-left: 1rem;">Precio Pizza Gigante: ${pizzas.precioGigante} <input type="radio" value="${pizzas.precioGigante}" name="precioPizza" id="pizzaComun" style=" width: 1rem;"></h3>
            
            <button id="botonCarrito${pizzas.nombre}" class="btn btn-outline-danger m-3" >Agregar al carrito</button>
        </div>
    `
    catalogoMenu.appendChild(divMenu)  
    
    let botonCarrito = document.getElementById(`botonCarrito${pizzas.nombre}`)
botonCarrito.onclick = () =>{
 agregarAlCarrito(pizzas)

}
}
}
verMenu(menu)



function agregarAlCarrito(pizzas) {
    let precioElegida = document.querySelector("input[name=precioPizza]:checked");   
    precioElegida = precioElegida.value
    console.log(`${pizzas.imagen}Tu pizza ${pizzas.nombre} cuesta ${precioElegida} ha sido agregada al carrito`)
    
    class pizzasCarrito {
    constructor (nombre, precioElegida, imagen){
        this.nombre = nombre,
        this.precioElegida = precioElegida,
        this.imagen = imagen
    }
}
    let pizzotaCarrito = new pizzasCarrito (pizzas.nombre, precioElegida, pizzas.imagen);
    
    //pizzas = `Tu pizza ${pizzas.nombre} cuesta $${precioElegida.value} ha sido agregada al carrito`
    productosEnCarrito.push(pizzotaCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    
        swal({
            title: "Agregaste al carrito!",
            text: `Una pizza ${pizzas.nombre} que cuesta ${precioElegida} ` ,
            icon: "success",
            timer: 3000,
          });
        
}

console.log(productosEnCarrito)




//función para buscar y borrar la variedad
function borrarVariedad(array){
 let nombreaEliminar = document.getElementById("inputNombreEliminar")
 nombreaEliminar = nombreaEliminar.value
 let arrayNombre = array.map(variedad => variedad.nombre)
 let indice = arrayNombre.indexOf(nombreaEliminar)

 array.splice(indice, 1)
 //alert(`eliminaste ${nombreaEliminar}`)
verMenu(menu)
 localStorage.setItem("menuPizzas", JSON.stringify(array))
    
 formid2 = document.getElementById("eliminarPizzas")
    formid2.reset()
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
                <input type="text" name="Nombre" id="inputNombre" required>
                <label class="Label" for="precioChica">Precio de la Pizza Chica</label>
                <input type="number" name="precioChica" id="inputPrecioChica">
                <label class="Label" for="precioMedia">Precio de la Media Pizza</label>
                <input type="number" name="precioMedia" id="inputPrecioMedia">
                <label class="Label" for="precioGigante">Precio de la Pizza Gigante</label>
                <input type="number" name="precioGigante" id="inputPrecioGigante">
                <br>
                <input type="button" class="btn-cargar" id="btnCargar" value="Cargar" >
                <br>
                <br>
            </form>
            <form id="eliminarPizzas">
                <h2>Eliminar variedades de Pizzotas</h2>
                <label class="Label" for="NombreEliminar">Nombre de la pizza a eliminar</label>
                <input type="text" name="NombreEliminar" id="inputNombreEliminar" required>
                <br>
                <input type="button" class="btn-Eliminar" id="btnEmilinar" value="Eliminar" >
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

        let btnEmilinar = document.getElementById("btnEmilinar")
        btnEmilinar.onclick = ()=> {
            borrarVariedad(menu)
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

     function compraTotal(array){

        let total = array.reduce((acc, productoCarrito)=> acc + parseInt(productoCarrito.precioElegida) ,0)
        console.log("Acc con reduce " + total)
        //ternario para mostrar en el html
        total == 0 ?
        precioTotal.innerHTML = `No hay productos agregados` :
        precioTotal.innerHTML = `El total del carrito es <strong>${total}</strong>`
        return total
    }
    
function cargarProductosCarrito(array){
    modalCarrito.innerHTML = ""
    for(let productoCarrito of array){        
        modalCarrito.innerHTML += `
        <div class="card" style="width: 18rem;" id="productoCarrito${productoCarrito.nombre}">
  <img "src=/imagenes/${productoCarrito.imagen}" class="card-img-top" alt="${productoCarrito.imagen}">
  <div class="card-body">
    <h5 class="card-title">Tu pizza ${productoCarrito.nombre}</h5>
    <p class="card-text">cuesta $${productoCarrito.precioElegida}</p
  </div>         
  <button type="button" class="btn btn-danger" id="botonEliminar${productoCarrito.nombre}">Eliminar</button>
</div>
        `

    }
array.forEach((productoCarrito)=>{
    document.getElementById(`botonEliminar${productoCarrito.nombre}`).addEventListener("click", ()=>{
         console.log("btn eliminar funciona")
        console.log(productoCarrito.nombre)
        let cardProducto = document.getElementById(`productoCarrito${productoCarrito.nombre}`)
        cardProducto.remove()

        let productoEliminar = array.find(pizzas => pizzas.nombre == productoCarrito.nombre)
        console.log(productoEliminar)
    
        let posicion = array.indexOf(productoEliminar)
        console.log(posicion)
        
        array.splice(posicion, 1)
        console.log(array)
    
        localStorage.setItem("carrito", JSON.stringify(array))
    
        compraTotal(array)
    })
 })    
   compraTotal(array)
   
}
console.log(productosEnCarrito)
 btnNavCarrito.onclick = ()=>{
    cargarProductosCarrito(productosEnCarrito)
    //agregarAlCarrito(productosEnCarrito)
    
} 


finalizarCompra.addEventListener("click", ()=>{
    alertaCompra()
})







//compraTotal(array)

// función para seleccionar uno de los valores de un producto para cargarlo al carrito     
     
     
        // let precioElegida = document.querySelector("input[name=precioPizza]:checked");
        // precioElegida = precioElegida.value
        // console.log(precioElegida)






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

