import express from "express";

//Crear una instancia de Express
const app = express();

//configurar el puerto en el que el servidor escuchará 
const PORT = 3000; 

//Ruta básica
app.get(`/`, (req, res) =>{

    res.send(`!Hola, mundo!`);
});


//Iniciar el servidor 
app.listen(PORT, ()=>{

    console.log(`Servidor corriendo en htto://loalhost:${PORT}`);
});


//Ruta GET para el home
    //Solicitud: http://localhost:3000/
    app.get(`/`, (req, res)=>{

        res.send(`Página de inicio`);
    });

    // Ruta GET para recibir datos simples 
    // Solicitud: http://localhost:3000/data
    app.get(`/`, (req, res)=>{

        res.send(`Datos recibido`);
    });

// Ruta GET para parámetro de ruta
// Solicitud: http://localhost:3000/user/123
app.get(`/user/:id`, (req, res)=>{

    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Ruta GET con múltiples parámetros
// Solicitud: http://localhost:3000/product/electronics/456

app.get(`/product/:category/:id`, (req, res)=>{

    const {category, id} = req.params;
    res.send(`Categoría: ${category}, ID del producto: ${id}`);
});

// Ruta GET con parámetro de consulta 
// Solicitud: http://localhost:3000/search?q=javascript
app.get(`/search`, (req, res) =>{

    const query = req.query.q;
    res.send(`Resultados de búsqueda para: ${query}`);
});

// Ruta GET con múltiples parámetros de consulta 
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get(`/filter`, (req, res)=>{

    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});

