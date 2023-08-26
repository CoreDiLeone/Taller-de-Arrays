// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];


document.addEventListener("DOMContentLoaded", (e) => {
// Función que recibe por parámetro un array y muestra sus elementos en pantalla
  function showList(array) {
    const container = document.getElementById("list");
    container.innerHTML = "";

    // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    array.forEach((element) => {
  

     //Para que funcione la solución2 hay que comentar la línea 40
     if (typeof element === "string"){
  
        
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        container.appendChild(li);

  //Para que funcione la solución2 hay que comentar la línea 48
     }
  
    });
  }
 
   /*SOLUCIÓN-1 UTILIZANDO LOS MÉTODOS SORT() Y TYPEOF()*/

strangeArray.sort((a, b) => {

    console.log(a, b);

  if (typeof a === "string" && typeof b === "string" && a.toLowerCase() == b.toLowerCase()){

    //implemento toLowerCase() porque sort compara los strings según su código unicode, el unicode para
    //mayúsculas y minúsculas es distinto.

    return 0;

  }

  if(typeof a === "string" && typeof b === "string" && a.toLowerCase() > b.toLowerCase()){
    
    return 1;

  }

  return -1;

});

    showList(strangeArray);
});



/*OTRA SOLUCIÓN UTILIZANDO LOS MÉTODOS FILTER(), SORT() Y TYPEOF()*/

//Utilizo la función flecha o anónima la cual no necesita de la palabra clave "return"

/*const arrayFiltrado = strangeArray.filter((element) =>  typeof(element) === "string");


arrayFiltrado.sort((a, b) => {

if ( a.toLowerCase() == b.toLowerCase() ) return 0;


if( a.toLowerCase() > b.toLowerCase() ) return 1;

return -1;


});

//console.log(arrayFiltrado);
showList(arrayFiltrado);
});*/

