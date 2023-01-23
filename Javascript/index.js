// El código es para una pizzería, interactuamos con el cliente en caso que éste este interesado.

//funciones:
calcularPrecios
mostrarMenu
mostrarPreciosChicas
mostrarPreciosMedias
mostrarPreciosGigantes
buscarVariedad

//objetos para la pizzería, en este caso van a ser las variedades de pizzas con sus precios en sus diferentes versiones
//para crear los objetos utilizamos el metodo constructor


// constructor de objetos

class pizza {
    constructor(id, nombre, precioChica, precioMedia, precioGigante){
        this.id = id;
        this.nombre = nombre;
        this.precioChica = precioChica;
        this.precioMedia = precioMedia;
        this.precioGigante = precioGigante
    }
}

const muzza = new pizza (1, "muzza", 950, 1100, 1800);
const fugazza = new pizza (2, "fugazza", 1100, 1200, 2100);
const jamon = new pizza (3, "jamon", 1100, 1200, 2100);
const caprece = new pizza (4, "caprece", 1200, 1200, 2100);
const morron = new pizza (5, "morrón", 1200, 1400, 2200);
const palmito = new pizza (6, "palmito", 1850, 2000, 3300);
const anchoas = new pizza (7, "anchoas", 1500, 1600, 2600);
const napolitana = new pizza (8, "napolitana", 1300, 1400, 2400);



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
//mostrarPreciosGigantes(menu)



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
   //buscarVariedad(menu) 





let respuestas = true
//aplicamnos un ciclo do while, en caso de no responder de manera correcta, les vuelve a preguntar
do{
let saludo = prompt(`hola, como estás? conoces las PIZZOTAS?
(responde con "si" o con "no" o escribí "salir" para acceder a la página)`)

if(saludo == "no" ){
    let preguntar = prompt("te gustaría conocer sobre nuestras pizzas?")
    if(preguntar == "si"){
     switch( preguntar){
     case "si":
        alert("nuestras pizzas son gigantes de 12 porciones, podes elegír variedades diferentes en tu pizzota, también hacemos pizzas de 8 porciones comunes")
     case "si":
        //reemplazamos con la función buscarVariedad todo el código que estaba dentro del switch, igual lo dejamos comentado para comparar
        buscarVariedad(menu)
     case "si":
        let respuesta3 = true
        do{
        let pregunta2 = prompt(`te gustaría conocer otro precio?`)
        if (pregunta2.toLowerCase() == "si"){
            buscarVariedad(menu)
        }else if( pregunta2.toLowerCase() == "no"){
            respuesta3 = false
        }else{
            alert(`debes responder "si" o "no"`)
        }
    }while(respuesta3)

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
    case "si" :
        alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.") 
        respuestas = false
    }
    }else  if(preguntar == "no"){
    alert("Puedes seguir conociendo nuestra página. Gracias.")
    respuestas = false
        }else{
            alert("Debes responder si o no")
        }
 }else if(saludo == "si"){
    alert("gracias por elegirnos nuevamente!!")
    respuestas = false
 }else if ( saludo == "salir"){
    respuestas = false
 }else{
    alert("Debes responder si o no")
    
}
 

}while(respuestas)
// aplicamnos un ciclo do while, en caso de no responder de manera correcta, les vuelve a preguntar
    let respuestas2 = true

    do {
    let saberPrecios = prompt(`te gustaría conocer el precio de las pizzas de diferentes variedades?
    responde "si" o "no" oescribe "salir" para acceder a la página, `)
    if (saberPrecios == "si"){
        alert(" puedes elegir hasta 2 variedades, coloca a continuacion el valor de las variedades que te gusten")
    let pizza1 = parseInt(prompt(`coloca el precio de la media pizza que te guste. 
    Muzza $700, 
    palmitos $1000, 
    gugazza $800, 
    jamón $800`));
    let pizza2 = parseInt(prompt(` coloca el precio de la otra mitad, 
    Muzza $700, 
    palmitos $1000, 
    fugazza $800, 
    jamón $800`));

// creamos una función para calcular los precios sacando un promedio del valor de dos pizzas distintas
    function calcularPrecios (x,y){
  
    //let suma = pizza1 + pizza2
    //let resultado = suma / 2
    //alert("Esa pizza cuesta " + "$" +resultado) 
    alert("Esa pizza cuesta " + "$" +(x + y) / 2)
    alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")
    respuestas2 = false
 }
    calcularPrecios(pizza1, pizza2)
    
}else if(saberPrecios == "no") {
    alert("Puedes seguir conociendo nuestra página. Gracias.")
    respuestas2 = false
        }else if(saberPrecios == "salir"){
            respuestas2 = false
        }else{
            alert("Debes responder si o no")
        }
        
    }while(respuestas2)   