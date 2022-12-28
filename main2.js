let total = 0;

let Usuario= prompt("Hola ingresa tu nombre para logearte")
alert("Bienvenido/a " + Usuario)
alert("A continuación te mostrare los articulos de contrucción disponibles")

//objetos

const arrayArticulos = [
{ art: 1, nombre: "Ventana 1x1", precio: 2500, stock: 10},
{ art: 2, nombre: "Ventana 1.2 x 1.5", precio: 5000,stock: 5},
{ art: 3, nombre: "Puerta Exterior", precio: 5500,stock: 4},
];

function Producto(art, nombre, precio, stock){
    this.art = art;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = Number(stock);
}

const articulo= new Producto (4,"Puerta Interior", 3000, 4)
arrayArticulos.push(articulo)

arrayArticulos.forEach ((numero) => {
  console.log(numero.nombre)});

let opcion = prompt("Elige el articulo que deseas comprar: \n1-Ventana 1x1 \n2-Ventana 1.20x 1.50 \n3-Puerta para exterior \n4- Puerta interior \nPresiona 0 para salir")

while (opcion != 0){

    cantidad = prompt("Cuantas unidades desea comprar?")
    
    switch (opcion){
      case "1":           
        if (cantidad <= arrayArticulos[opcion-1].stock){
          alert("un item cuesta: " + arrayArticulos[opcion-1].precio );
          total += (cantidad * arrayArticulos[opcion-1].precio);
          alert("El valor de su compra es de $" + total);
        }
        break;


    case "2":
      if (cantidad <= arrayArticulos[opcion-1].stock){
        alert("un item cuesta: " + arrayArticulos[opcion-1].precio );
        total += (cantidad * arrayArticulos[opcion-1].precio);
        alert("El valor de su compra es de $" + total);
        }
        break;


        case "3":
          if (cantidad <= arrayArticulos[opcion-1].stock){
            alert("un item cuesta: " + arrayArticulos[opcion-1].precio );
            total += (cantidad * arrayArticulos[opcion-1].precio);
            alert("El valor de su compra es de $" + total);
            }
            break;

            case "4":
          if (cantidad <= arrayArticulos[opcion-1].stock){
            alert("un item cuesta: " + arrayArticulos[opcion-1].precio );
            total += (cantidad * arrayArticulos[opcion-1].precio);
            alert("El valor de su compra es de $" + total);
            }
            break;

      default:
    opcion = prompt("Opcion no Valida presione boton Salir")
    break;
}
  opcion = prompt("Elige el articulo que deseas comprar: \n1-Ventana 1x1 \n2-Ventana 1.20x 1.50 \n3-Puerta para exterior \n4- Puerta interior \nPresiona 0 para salir")
}
alert("el total es de: " + total)
