const mongoose = require("mongoose");
const VoluntariaSchema = require("../models/VoluntariaSchema");
 const bcrypt = require('bcrypt');


const criarVoluntaria = async (request, response) => {
        const { name, email, cpf, telefone,estado, cidade, registro_profissional_ativo, profissao,possui_local_para_atendimento, tempo_disponivel_para_voluntariado } = request.body;
        const senhaHasheada = bcrypt.hashSync(request.body.password, 10);
        request.body.password = senhaHasheada;
        //Deve retornar conflito(409) ao cadastrar um email existente no banco de dados
        const emailExiste = await VoluntariaSchema.exists({
          email: request.body.email,
        });
        if (emailExiste) {
          return response.status(409).send({
            Alerta: "Este endereço de email já está em uso. Tente outro.",
          });
        }
        //Deve retornar conflito(409) ao cadastrar um cpf existente no banco de dados
        const cpfExiste = await VoluntariaSchema.exists({
          cpf: request.body.cpf,
        });
        if (cpfExiste) {
          return response.status(409).send({
            Alerta: "Este CPF já está cadastrado.",
          });
        }
        try {
          const novoUsuario = new VoluntariaSchema(request.body);
          const salvarUsuario = await novoUsuario.save();
          //Deve retornar(201) quando criar o usuário.
          response.status(201).send({
            Bem_vindas: "Parabéns por sua iniciativa! O seu usuário foi cadastrado!",
            Cadastro: salvarUsuario,
          });
        } catch (err) {
          response.status(500).send({
            message: err.message,
          });
        }
      };

  
const buscarTodasVoluntarias = async (request, response) => {
    try {

        const voluntaria = await VoluntariaSchema.find()

        if (voluntaria.length > 1) {
            return response.status(200).json({
                message: `Encontramos ${voluntaria.length} voluntárias.`,
                voluntaria
            })
        } else if (voluntaria.length == 1) {
            return response.status(200).json({
                message: `Encontramos ${voluntaria.length} voluntaria.`,
                voluntaria
            })
        } else {
            return response.status(404).json({
                message: `Nenhuma voluntaria  cadastrada até o momento.`
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarVoluntariaPorId = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da voluntária corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const voluntaria = await VoluntariaSchema.find({
            id
        })
        if (voluntaria.length == 0) {
            return response.status(200).json({
                message: `Voluntária não encontrada.`
            })
        }
        response.status(200).json(voluntaria)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}


const deletarVoluntaria = async (request, response) => {
    const {
        id
    } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da voluntaria corretamente, o mesmo possui 24 caracteres.`
            })
        }
        const voluntariaEncontrada = await VoluntariaSchema.deleteOne({
            id
        })
        if (voluntariaEncontrada.deletedCount === 1) {
            return response.status(200).send({
                message: `A voluntaria foi deletada com sucesso!`
            })
        } else {
            return response.status(404).send({
                message: "A voluntaria não foi encontrada."
            })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarVoluntaria = async (request, response) => {
    const { id } = request.params;
    const {
     name, email, cpf, telefone,estado, cidade, registro_profissional_ativo, profissao,possui_local_para_atendimento, tempo_disponivel_para_voluntariado } = request.body;
    
    try {
      const voluntariaAtualizado = await VoluntariaSchema.find({ id }).updateOne({
        name, email, cpf, telefone,estado, cidade, registro_profissional_ativo, profissao,possui_local_para_atendimento, tempo_disponivel_para_voluntariado 
    });
      const cadastroAtualizado = await VoluntariaSchema.find({ id });
      //Deve retornar mensagem de erro(404) caso o id voluntário não exista no banco de dados.
      if (cadastroAtualizado.length == 0) {
        return response.status(404).json({
          Prezades: `A voluntária não foi encontrada.`,
        });
      }
      //Deve retornar(200) caso encontre o paciente por Id.
      response.status(200).send({
        Prezades: "Voluntária atualizada com sucesso",
        cadastroAtualizado,
      });
    } catch (error) {
      response.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
    criarVoluntaria,
    buscarTodasVoluntarias,
    buscarVoluntariaPorId,
    deletarVoluntaria,
    atualizarVoluntaria
}