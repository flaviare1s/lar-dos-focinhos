# Lar dos Focinhos

## Visão Geral

Este projeto foi criado como uma atividade avaliativa, realizada em equipe, no bootcamp de React e Node da SoulCode Academy. O backend foi desenvolvido em ExpressJS para a realização de operações CRUD. O sistema possui três tabelas, criadas utilizando Sequelize, e relacionamentos entre elas, fornecendo endpoints para gerenciamento completo dos dados.

## Membros da equipe:
- Flávia Reis
- Ingrid Munhoz

## Funcionalidades

- **CRUD Completo**: Cada modelo principal (Cliente, Pet, Reserva) tem endpoints para criar, ler, atualizar e deletar registros.
- **Relacional**: O sistema gerencia relacionamentos entre tabelas (Clientes, Pets, Reservas).

## Tecnologias Utilizadas

- **Node.js**
- **ExpressJS**
- **Sequelize** (ORM para banco de dados)
- **Insomnia** (ou qualquer outro banco de dados suportado pelo Sequelize)
- **dotenv** (para gerenciamento de variáveis de ambiente)

## Estrutura dos Endpoints

### Clientes

- **POST /clientes**
  - Cria um novo cliente.
  - Request body: `{ "nome": "Nome do Cliente", "email": "email@example.com", "telefone": "123456789" }`

- **GET /clientes**
  - Retorna todos os clientes.

- **GET /clientes/:id**
  - Retorna um cliente pelo ID.

- **PUT /clientes/:id**
  - Atualiza um cliente pelo ID.
  - Request body: `{ "nome": "Nome Atualizado", "email": "email@example.com", "telefone": "123456789" }`

- **DELETE /clientes/:id**
  - Deleta um cliente pelo ID.

### Pets

- **POST /pets**
  - Cria um novo pet.
  - Request body: `{ "nome": "Nome do Pet", "raca": "Raça", "dataNasc": "YYYY-MM-DD", "clienteId": 1 }`

- **GET /pets**
  - Retorna todos os pets.

- **GET /pets/:id**
  - Retorna um pet pelo ID.

- **PUT /pets/:id**
  - Atualiza um pet pelo ID.
  - Request body: `{ "nome": "Nome Atualizado", "raca": "Raça Atualizada", "dataNasc": "YYYY-MM-DD", "clienteId": 1 }`

- **DELETE /pets/:id**
  - Deleta um pet pelo ID.

### Reservas

- **POST /reservas**
  - Cria uma nova reserva.
  - Request body: `{ "dataInicio": "YYYY-MM-DD", "dataTermino": "YYYY-MM-DD", "statusReserva": "Status", "tipoAcomodacao": "Tipo", "clienteId": 1, "petId": 1 }`

- **GET /reservas**
  - Retorna todas as reservas.

- **GET /reservas/:id**
  - Retorna uma reserva pelo ID.

- **PUT /reservas/:id**
  - Atualiza uma reserva pelo ID.
  - Request body: `{ "dataInicio": "YYYY-MM-DD", "dataTermino": "YYYY-MM-DD", "statusReserva": "Status", "tipoAcomodacao": "Tipo", "clienteId": 1, "petId": 1 }`

- **DELETE /reservas/:id**
  - Deleta uma reserva pelo ID.

  ## Configuração das variáveis de ambiente

  Renomeie o arquivo .env.example para .env e coloque as suas credenciais de acesso ao banco de dados.
