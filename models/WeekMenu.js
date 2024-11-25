const mongoose = require('mongoose');

const ComidaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
});

const DiaMenuSchema = new mongoose.Schema({
    dia: { 
        type: String, 
        required: true, 
        enum: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
    },
    desayuno: { type: ComidaSchema, required: false },
    almuerzo: { type: ComidaSchema, required: false },
    cena: { type: ComidaSchema, required: false },  
}, { 
    _id: false,
    validate: {
        validator: function(dia) {
            return dia.desayuno || dia.almuerzo || dia.cena;
        },
        message: "Cada día debe tener al menos una comida (desayuno, almuerzo o cena)."
    }
});

const MenuSemanalSchema = new mongoose.Schema({
    semana: { type: String, required: true }, 
    dias: { 
        type: [DiaMenuSchema], 
        required: true,
        validate: {
            validator: function(dias) {
                return dias.length === 7 && dias.every(dia => dia.desayuno || dia.almuerzo || dia.cena);
            },
            message: "El menú debe incluir 7 días, y cada día debe tener al menos una comida."
        }
    }
});

const MenuSemanal = mongoose.model('MenuSemanal', MenuSemanalSchema);

module.exports = MenuSemanal;
