<br>
<div align = "center">
<img src='./src/logo.png' width = 500 alt = 'logo ajudaElas'>
</div>
<br>
 Projeto: AjudaElas - Organização Feminista


O Projeto é um sistema de cadastro para mulheres que desejam se voluntariar ao AjudaElas tanto para mulheres que estão buscando ajuda profissional. O projeto social AjudaElas  oferece assessoria profissional gratuita para mulheres cis e trans em situação de violência e vulnerabilidade social, onde existem um grupo de voluntárias em cada estado do País.

A ONG está voltado a oferecer orientação e assessoria às mulheres, a partir da formação profissional das voluntárias. O AjudaElas oferece atendimento profissional voluntário nas áreas de serviço social, direito e psicologia, levando em consieração serem áreas mais presentes no atendimento à violência do genero, a Organização também promove eventos e cursos objetivo de promover espaços educativos e de maior conscientização para equidade de gênero e direitos humanos das meninas e mulheres.

  
  
  
  
📁 Arquitetura

 📁 node_modules

 📁 src

      📁 controllers
          📄 authController.js
          📄 beneficiadasController.js
          📄 voluntariaController.js 


     📁 database
          📄 moogoConfig.js


     📁  middlewares
          📄 auth.js

      
     📁 models
          📄 BeneficiadaSchema.js
          📄 VoluntariaSchema.js 
        
   
     📁 routes
         📄 beneficiadasRouter.js
         📄 voluntariaRouter.js   
         📄 indexRouter.js    

    📁 utils
         📄 servico.js


     📄 app.js  
     📄 .env   
     📄 .env.exemple    
     📄 .gitignore  
     📄 package-lock.json   
     📄 package.json   
     📄 projeto.md
     📄 server.js
     📄 vercel.json





## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

 <br>
<br>


# Contrato da API

### Requisitos 
- [ ] GET "**buscartodas/**" Deverá retornar todas as voluntarias cadastradas.
- [ ] GET **"/buscarporid/[id]** Deverá retornar a voluntária com o id informado.
  
- [ ] POST   "**/criarvoluntaria**" Deverá criar uma "voluntária"
- [ ] POST   "**/login**" Deverá criar login de uma voluntária

- [ ] DELETE   "/deletar/[ID]" Deverá deletar uma voluntária por id específico e retorna mensagem;

- [ ] PATCH  "/atualizar/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;

- [ ] GET "**buscartodas/**" Deverá retornar todas as beneficiadas cadastradas.
- [ ] GET **"/buscarporid/[id]** Deverá retornar a beneficiada com o id informado.
  
- [ ] POST   "**/criarbenefiadas**" Deverá criar uma "beneficiada"

- [ ] DELETE   "/deletar/[ID]" Deverá deletar uma beneficida por id específico e retorna mensagem;

- [ ] PATCH  "/atualizar/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;
### Regras de negócio

- [ ]  Não poderá existir volutária com o mesmo cpf ;
- [ ]  Não poderá existir beneficiada com o mesmo cpf;

<br>
<br>

## Dados para Collection ajudeElas

Voluntárias:
- _id: autogerado e obrigatório;
- name: string e obrigatório;
- email: string e obrigatorio;
- password: string e obrigatorio;
- cpf: number e obrigatorio;
- telefone: number e obrigatorio;
- estado: string e obrigatorio;
- cidade: string e  obrigatório;
- possui_local_para_atendimento: boolean;
- tempo_disponivel_para_voluntariado: string e obrigatório;

Beneficiadas:
- _id: autogerado e obrigatório;
- nome: string e obrigatório;
- idade: string e obrigatorio;
- cpf: number e obrigatorio;
- telefone: number e obrigatorio;
- estado: string e obrigatorio;
- cidade: string e  obrigatório;
- servicos_buscados: array e obrigatório;


### API deve retornar seguinte JSON de exemplo:

```javascript
[
  {
	"Bem_vindas": "Parabéns por sua iniciativa! O seu usuário foi cadastrado!",
	"Cadastro": {
		"name": "Gabriella",
		"email": "gabi15@gmail.com",
		"password": "$2b$10$GYDeoykrESj.M2RPk.8b.exP.bASekvzngcWEcXIN5EQk96iXpp9K",
		"cpf": 78684655,
		"telefone": 71985742562,
		"estado": "Pernambuco",
		"cidade": "Olinda",
		"registro_profissional_ativo": true,
		"profissao": "Psicologa",
		"possui_local_para_atendimento": true,
		"tempo_disponivel_para_voluntariado": "10",
		"_id": "63949894572971410c9d8081",
		"id": "63949894572971410c9d8082",
		"createdAt": "2022-12-10T14:32:52.680Z",
		"updatedAt": "2022-12-10T14:32:52.680Z",
		"__v": 0
	}
}
]
```