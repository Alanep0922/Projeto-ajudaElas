const mongoose = require("mongoose");
const beneficiadaSchema = require("../models/BeneficiadaSchema");
const bcrypt = require('bcrypt');

const criarBeneficiada = async (request, response) => {
    const { name, idade, cpf, telefone, estado, cidade, servicos_buscados } =
      request.body;
    
    try {
      const beneficiadas = new beneficiadaSchema({
        name: name,
        idade: idade,
        cpf: cpf,
        telefone: telefone,
        estado: estado,
        cidade: cidade,
        servicos_buscados: servicos_buscados,


    });
      const salvarBeneficiadas = await beneficiadas.save();
      response.status(201).json({
        message: `Beneficiada cadastrada com sucesso!`,
        beneficiades: salvarBeneficiadas,
      });
    } catch (error) {
      response.status(400).json({
        message: error.message,
      });
    }
  };

  const buscarTodasBeneficiadas = async (request, response) => {
    try {

        const beneficiada = await beneficiadaSchema.find()

        if (beneficiada.length > 1) {
            return response.status(200).json({
                message: `Encontramos ${beneficiada.length} beneficiadas.`,
                beneficiada
            })
        } else if (beneficiada.length == 1) {
            return response.status(200).json({
                message: `Encontramos ${beneficiada.length} beneficiadas.`,
                beneficiada
            })
        } else {
            return response.status(404).json({
                message: `Nenhuma beneficiada  cadastrada até o momento.`
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarBeneficiadaPorId = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da beneficiada corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const beneficiada = await beneficiadaSchema.find({
            id
        })
        if (beneficiada.length == 0) {
            return response.status(200).json({
                message: `Beneficiada não encontrada.`
            })
        }
        response.status(200).json(beneficiada)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}


const deletarBeneficiada = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da beneficiada corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const beneficiadaEncontrada = await beneficiadaSchema.deleteOne({
            id
        })
        if (beneficiadaEncontrada.deletedCount === 1) {
            return response.status(200).send({
                message: `A beneficiada foi deletada com sucesso!`
            })
        } else {
            return response.status(404).send({
                message: "A beneficiada não foi encontrada."
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarBeneficiada = async (request, response) => {
    const { id } = request.params;
    const {
      name, idade, cpf, telefone, estado, cidade, servicos_buscados } = request.body;
    
    try {
      const beneficiada = await beneficiadaSchema.find({ id }).updateOne({
        name, idade, cpf, telefone, estado, cidade, servicos_buscados
    });
      const cadastroAtualizado = await beneficiadaSchema.find({ id });
      //Deve retornar mensagem de erro(404) caso o id voluntário não exista no banco de dados.
      if (cadastroAtualizado.length == 0) {
        return response.status(404).json({
          Prezadas: `A beneficiada não foi encontrada.`,
        });
      }
      //Deve retornar(200) caso encontre o paciente por Id.
      response.status(200).send({
        Prezadas: " Beneficiada atualizada com sucesso",
        cadastroAtualizado,
      });
    } catch (error) {
      response.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
    criarBeneficiada,
    buscarTodasBeneficiadas,
    buscarBeneficiadaPorId,
    deletarBeneficiada,
    atualizarBeneficiada
};