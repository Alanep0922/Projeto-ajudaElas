const mongoose = require('mongoose');

const beneficiadaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    idade: {
      type: String,
      required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
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
    servicos_buscados: {
        type: Array,
        require: true
    },
     

}, { timestamps: true })

module.exports = mongoose.model("beneficiadas", beneficiadaSchema)