const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, Ana] = empleados;
console.log(Ana);

const [Luis] = empleados
const {email} = Luis
console.log(email);
 

// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon
// Extrae el tipo de Pokemon que es
// Extrae el movimiento “Tackle”

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

const { name: nombre } = pokemon;
console.log(nombre);
const { type } = pokemon;
console.log(type);
const { moves } = pokemon;
const [, movimiento] = moves;
console.log(movimiento);

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};
const pikamon = { ...pokemon, ...pikachu };
console.log(pikamon);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
const sumEveryOther = (...numeros) => {
  let sumando = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumando += numeros[i];
  }
  console.log(sumando);
};

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

// // Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
const addOnlyNums = (...cosas) => {
  let sumando = 0;

  for (let i = 0; i < cosas.length; i++) {
    if (typeof cosas[i] == "number") {
      sumando += cosas[i];
    }
  }
  console.log(sumando);
};

addOnlyNums(1, "perro", 2, 4); //7

// // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
const countTheArgs = (...argumentos) => {
  console.log(argumentos.length);
};
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

// // Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (a, b) => {
  let sumaArr = [...a, ...b];
  console.log(sumaArr);
};
combineTwoArrays(["array1", "Thunderbolt"], ["array2", "Thunderbolt"]); //2

// . Extras

// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana

const { today: maximaHoy } = HIGH_TEMPERATURES;

const { tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
const onlyUniques = (...repetidos) => {
  let unicos = repetidos.filter((item, index) => {
    return repetidos.indexOf(item) === index;
  });
  console.log(unicos);
};
onlyUniques("gato", "pollo", "cerdo", "cerdo");
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
const combineAllArrays = ((...arrays) => {
    let arrayNuevo =[]
    arrays.forEach(element => {
        arrayNuevo.push(...element)
    }); console.log(arrayNuevo); 
})
combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
const sumAndSquare = ((...args) => {
    let arrayNuevo =[]
    
    args.forEach(element => {
        arrayNuevo.push  (element**element)
    });console.log(arrayNuevo);
    let valorfinal = 0
    arrayNuevo.forEach(arrayNuevoNumero => {
        valorfinal+=arrayNuevoNumero
    });console.log(valorfinal)
})
sumAndSquare(1, 1, 2, 2)
