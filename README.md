# Desafio Nginx e Node.js

Neste desafio, você irá aplicar os conhecimentos adquiridos sobre o uso do nginx como proxy reverso em conjunto com uma aplicação Node.js e um banco de dados MySQL. 

O objetivo é criar uma aplicação que, ao receber uma solicitação do usuário através do nginx, faça uma chamada para a aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro em um banco de dados MySQL, cadastrando um nome na tabela "people". Em seguida, a aplicação Node.js deverá retornar uma página HTML contendo o título "Full Cycle Rocks!" e uma lista de nomes cadastrados no banco de dados.

A lista de nomes cadastrados é gerada através da biblioteca `faker.js`, que gera nomes aleatórios toda vez que a página é atualizada.


## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado na sua máquina. Você pode baixar o Docker em [https://www.docker.com/get-started](https://www.docker.com/get-started).
## Executando a aplicação

Para executar o projeto e criar sua imagem do zero, siga as instruções abaixo:

1. Clone este repositório em sua máquina local: git clone https://github.com/sTrkalec/challenge-docker-nginx-mysql-node.git


2. Navegue até o diretório do projeto: 

```javascript
    cd challenge-docker-2
```
3. Para executar a aplicação, você pode utilizar o docker-compose fornecido neste repositório. Basta executar o seguinte comando na raiz do projeto:

```javascript
    docker-compose up -d
```

Isso irá criar os containers para o nginx, Node.js e MySQL e configurá-los automaticamente. Após isso, a aplicação estará disponível na porta 8080.

## Arquivos

Este repositório contém os seguintes arquivos:

- `docker-compose.yml`: Arquivo de configuração do Docker Compose.
- `nginx/`: Pasta contendo o Dockerfile e a configuração do nginx.
- `node/`: Pasta contendo o Dockerfile e o código-fonte da aplicação Node.js.
- `mysql/`: Pasta contendo o Dockerfile e a configuração do MySQL.

## Dependências

As únicas dependências para executar esta aplicação são o Docker e o Docker Compose.

Certifique-se de que ambos estão instalados e configurados corretamente em sua máquina antes de executar o comando `docker-compose up`.

## Persistência de Dados

Este projeto utiliza um volume Docker para persistir os dados do banco de dados MySQL. O diretório local `./mysql/volume` é mapeado para o diretório `/var/lib/mysql` dentro do container do MySQL, permitindo que os dados sejam mantidos mesmo após o container ser reiniciado ou destruído.

## Considerações finais

Este desafio tem como objetivo consolidar os conhecimentos adquiridos sobre o uso do nginx como proxy reverso e como configurá-lo em conjunto com uma aplicação Node.js e um banco de dados MySQL. 

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue neste repositório.
