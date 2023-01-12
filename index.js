

let saludo = prompt("hola, como estás? conoces las PIZZOTAS?")

if(saludo == "no" ){
    let preguntar = prompt("te gustaría conocer sobre nuestras pizzas?")
    if(preguntar == "si"){
     switch( preguntar){
     case "si":
        alert("nuestras pizzas son gigantes de 12 porciones, podes elegír variedades diferentes en tu pizzota, también hacemos pizzas de 8 porciones comunes")
     case "si":
        let ofrecerMenu = prompt('te gusta alguna en particular? a continuación coloca el nombre de la variedad que te gusta, tenemos de Muzza, Fugazza, Anchoas, Palmitos, Roquefort, Huevo, morrones, calabresa') 
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
        } 
    case "si" :
        alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")   
    }
    }else{
    alert("Puedes seguir conociendo nuestra página. Gracias.")
    
}
 }else if(saludo == "si"){
    alert("gracias por elegirnos nuevamente!!")
 }else{
    alert("Debes responder si o no")}

    

   
    let saberPrecios = prompt("te gustaría conocer el precio de las pizzas de diferentes variedades?")
    if (saberPrecios == "si"){
        alert(" puedes elegir hasta 2 variedades, coloca a continuacion el valor de las variedades que te gusten")
    let pizza1 = parseInt(prompt("coloca el precio de la media pizza que te guste. Muzza $700, palmitos $1000, gugazza $800, jamón $800"));
    let pizza2 = parseInt(prompt(" coloca el precio de la otra mitad, Muzza $700, palmitos $1000, gugazza $800, jamón $800"));


    function calcularPrecios (x,y){
  
    //let suma = pizza1 + pizza2
    //let resultado = suma / 2
    //alert("Esa pizza cuesta " + "$" +resultado) 
    alert("Esa pizza cuesta " + "$" +(x + y) / 2)
    alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")
 }
    calcularPrecios(pizza1, pizza2)
    
}else {}


