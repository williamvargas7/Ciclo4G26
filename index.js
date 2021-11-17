const express = require('express');
const mongoose = require('mongoose');
const schemaPersona = require('./modelos/persona.js');

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb+srv://William:Vargas2021*@cluster01.4fvpi.mongodb.net/BDgrupo26');

// respond with "hello world" when a GET request is made to the homepage
app.get(
    '/Ruta', // Ruta
    function(request, response) {  //
    response.send('hello world <h1>Hola</h1>');
  });



app.post('/persona',
(request, response) => {

try {
    const data =request.body;
    let personaNueva = new schemaPersona ({
        id: data.id,
        nombre: data.nombre,
        apellidos: data.apellidos,
        edad: data.edad,
    });  
    personaNueva.save(
        function (error, datos){
            if (error){
                response.send('Ocurrio un error');
                response.send('Ocurrio una excepcion: '+ error.message); 
            }else{
                response.send('La persona ha sido creada');
            }
        }

    );
    
} catch (error) {
    response.send('Ocurrio una excepcion: '+ error.message); 
}

    
  }
  )


  const port = 3000;
  app.use(router);

  app.listen(
      port,
       () => {
           console.log("El servidor esta escuchando por el puerto: "+port);
       } 
    );