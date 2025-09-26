import os from `os`;

//Obtener arquitectura del sistema
console.log(`Arquitectura: `, os.arch());

//Obtener el mismo de tipo de sistema operativo
console.log(`Plataforma: `, os.platform());

//Obetener la cantidad total de memoria
console.log(`Memoria total: `, os.totalmem());

//Obtener memoria libre
console.log(`Memoria libre: `, os.freemem());

//Obtener la informacion de la CPU
console.log(`Informacion de la CPU: `, os.cpus());