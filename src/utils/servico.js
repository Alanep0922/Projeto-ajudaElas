function verificarItensObrigatorios(body) {

    if (!body.name) {
        return `O campo nome é obrigatório.`
    }
    if (!body.cpf) {
        return `O campo CPF é obrigatório.`
    }
    if (!body.profissao) {
        return `O campo profissao é obrigatório.`
    }
    return false
}


module.exports = {
    verificarItensObrigatorios,
    
}