const mongoose = require ('mongoose');

let schemaPersona = new mongoose.Schema(
    {
        id: String,
        nombre: String,
        apellidos: String,
        edad: Number,
    }
);

module.exports = mongoose.model('persona', schemaPersona, 'personas');