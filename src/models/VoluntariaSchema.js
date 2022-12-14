const mongoose = require('mongoose');

const voluntariaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    telefone: {
        type: Number,
        require: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    registro_profissional_ativo: {
        type: Boolean,
        require: true
    },
    profissao: {
        type: String,
        required: true
    },
    possui_local_para_atendimento: {
        type: Boolean,
        required: true
    },
    tempo_disponivel_para_voluntariado: {
        type: String,
        required: true
    },
    



}, { timestamps: true })

module.exports = mongoose.model("voluntaria", voluntariaSchema)