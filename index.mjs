
import { leerSuperheroes,agregarSuperheroes } from "./utils.mjs";

//Leer y mostrar la lista de superheroes ordenada

const superheroes = leerSuperheroes(`./superheroes.txt`);
console.log(`Superheroes ordenados: `);
console.log(superheroes);

const archivoOriginal = `./superheroes.txt`;
const archivoNuevo = `./agregarSuperheroes.txt`;

//Agregar nuevos super heroes 
agregarSuperheroes(archivoOriginal, archivoNuevo);

//Leer y mostrar la lista actualizada de superheroes ordenada
superheroes = leerSuperheroes(archivoOriginal);
console.log(`Superheroes ordenados: `);
console.log(superheroes);