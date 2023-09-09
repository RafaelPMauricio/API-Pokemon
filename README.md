# API-Pokemon

Uma API de Pokemon criada em Node.js e Express por mim, Rafael Maurício, para um exercício do módulo 02 do curso de Desenvolvimento de Software da Cubos Academy, que retorna informações relacionada a pokemon.

## Pré-requisitos

1. Um interpretador como:
   ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)

2. Um gerenciador de projetos como:
   ![NPM](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

3. Um API client como:
   ![Insomnia](https://img.shields.io/badge/Insomnia-4000BF.svg?style=for-the-badge&logo=Insomnia&logoColor=white)

4. A biblioteca:
   ![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)

5. Opcionalmente a biblioteca:
   ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

## Como instalar:

- Clone este repositório para sua máquina.

- Acesse o repositório em sua máquina.

- Instale as dependências através do NPM.

- Para executar o servidor deverá utilizar o interpretador de escolha, ou no caso de ter instalado o nodemon o gerenciador de escolha, como no exemplo:
  <img src="./imagensReadMe/iniciando-servidor.png">

## Funções

- Pegar uma lista de 20 pokemons por página.

- Pegar detalhes de um pokemon específico.

## Endpoints para utilização da API

GET - Pegar a lista de pokemons por página

```
"localhost:8000/pokemon/:pagina"
```

<img src="./imagensReadMe/rota-lista-1.png">

GET - Pegar detalhes do pokemon

```
"localhost:8000/pokemon/detalhes/:idOuNome"
```

<img src="./imagensReadMe/rota-detalhes-1.png">

### Parâmetros dos Endpoints

- Em lista de pokemons, a página poderá ser informada no campo **pagina**, caso não seja informado será retornada as informações da primeira página. Segue o exemplo:

```
"localhost:8000/pokemon/25"
```

<img src="./imagensReadMe/rota-lista-2.png">

- Em detalhes de pokemon, o número ou nome do pokemon deverá ser informado no campo **idOuNome**. Segue o exemplo:

```
"localhost:8000/pokemon/detalhes/25"
```

<img src="./imagensReadMe/rota-detalhes-2.png">
