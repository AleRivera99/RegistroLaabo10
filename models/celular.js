const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var CelularSchema = Schema({
        Modelo: {
            type: String,
            required: true,
           unique:true
        },
        Name: String,
        Memoria: {
            type: String,
            required: true
        },
        Ram: {
            type: String,
            required: true
        },
        space: Number
    }, {
        timestamps: true
    });
    
    module.exports = mongoose.model("Celular", CelularSchema);