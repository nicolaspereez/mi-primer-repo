import path from `path`;

//Definimos la ruta de archivo
const filePath = "./data/example.txt"; 

//Obtenemos el directorio base
const dirName = path.dirName(filePath);
console.log(`Directorio base: `, dirName);

//Obtener el nombre del archivo sin extension
const baseName = path.baseName(filePath, `.txt`);
console.log(`Nombre del archivo: `, baseName);

//Obtener la extension del archivo
const extName = path.extName(filePath);
console.log(`Extension del archivo: `, extName);

//Crear una ruta unida
const newPath = path.join(`/user`, `docs`, `newfile.txt`);
console.log(`Ruta nueva: `, newPath);


