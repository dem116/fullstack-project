const mongoose = require('mongoose');

const ComidaSchema = new mongoose.Schema({
    comida: { type: String, required: true },
}, { _id: false });

const DiaMenuSchema = new mongoose.Schema({
    dia: { type: String, required: true, enum: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'] },
    desayuno: ComidaSchema,
    almuerzo: ComidaSchema,
    cena: ComidaSchema
}, { _id: false });

const MenuSemanalSchema = new mongoose.Schema({
    semana: { type: String, required: true, unique: true }, 
    dias: [DiaMenuSchema]
}, { timestamps: true });

const MenuSemanal = mongoose.model('MenuSemanal', MenuSemanalSchema);

module.exports = MenuSemanal;
