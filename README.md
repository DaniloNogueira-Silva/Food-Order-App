# Documentação para o uso da API
Esse projeto foi feito usando react.js, node.js, mongo.db, express, redux e multer

## Endpoints
### POST /auth/register
Esse endpoint é responsável por cadastrar um novo usuário no banco de dados
#### Parâmetros
username, email, password, isAdmin
#### Respostas
##### Created! 201
Caso essa resposta aconteça, você vai cadastrar o usuário no banco.

Exemplo de resposta:
```

{
  "others": {
    "username": "testeApi",
    "email": "testeApi@gmail.com",
    "isAdmin": false,
    "_id": "63dcf1a498225f3cf88dc30c",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNmMWE0OTgyMjVmM2NmODhkYzMwYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzU0MjQxNjQsImV4cCI6MTY3NTQ0MjE2NH0.6EyM7bolTUVo8MfCdgaAlpWc3r6dDOSeWIIP18TNcH8"
}

```

##### Interal Server Error! 500
Caso essa resposta aconteça ocorreu um erro ao cadastrar o usuário

Exemplo de resposta:

```

"Já existe uma conta com esse email, tente novamemte"

```

### POST /auth/login
Esse endpoint é responsável por validar o usuário e fazer o login no site
#### Parâmetros
email, password e token
#### Respostas
##### OK! 200
Caso essa resposta aconteça, seu usuário foi validado e autenticado

Exemplo de resposta:
```
{
  "others": {
    "_id": "63dcf1a498225f3cf88dc30c",
    "username": "testeApi",
    "email": "testeApi@gmail.com",
    "isAdmin": false,
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNmMWE0OTgyMjVmM2NmODhkYzMwYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzU0MjQzODksImV4cCI6MTY3NTQ0MjM4OX0.Om6MuQveEkkhNDY19bjMDZrTX419V4toYuLzmv1DLvA"
}

```

##### Interal Server Error! 500
Caso essa resposta aconteça ocorreu um erro ao fazer o login.

Exemplo de resposta:

```
"Informações do usuário está errada"

```

### GET /product
Esse endpoint é responsável por mostrar todos os produtos cadastrados
#### Parâmetros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai mostrar todos os produtos do banco

Exemplo de resposta:
```

{
    "_id": "63dce771595ac383d1122e2d",
    "title": "Pizza de queijo",
    "desc": "Pizza grande de queijo e tomate",
    "price": 55,
    "img": "1675421553085pizza2.jpg",
    "review": 5,
    "category": "pizza",
    "__v": 0
  },

```
##### Interal Server Error! 500
Caso essa resposta aconteça houve um erro no servidor

### GET /product/find/:id
Esse endpoint é responsável por mostrar um produto específico
#### Parâmetros
Id do produto
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai mostrar o produto

Exemplo de resposta:
```
{
  "_id": "63dce771595ac383d1122e2d",
  "title": "Pizza de queijo",
  "desc": "Pizza grande de queijo e tomate",
  "price": 55,
  "img": "1675421553085pizza2.jpg",
  "review": 5,
  "category": "pizza",
  "__v": 0
}

```
##### Interal Server Error! 500
Caso essa resposta aconteça, não há nenhum produto com este Id

```

{
    "msg": "Nenhum produto com este id"
}

```

### POST /product
Esse endpoint é responsável por criar produtos
#### Parâmetros
title, description, price, review, image, category
#### Respostas
##### Created! 201
Caso essa resposta aconteça, você vai criar um produto

Exemplo de resposta:
```
{
  "title": "testeAPi",
  "desc": "testeApi",
  "price": 1,
  "img": "testeApi",
  "review": 1,
  "category": "testeApi",
  "_id": "63dcf59d44426ad65f695512",
  "__v": 0
}

```
##### Interal Server Error! 500
Caso essa resposta aconteça, houve algum problema na requisição


### POST /upload/image
Esse endpoint é responsável por fazer o upload das imagens através do multer. Ele vai ser somente em conjunto com o controller de produtos
#### Parâmetros
nome e o arquivo da imagem
#### Respostas
##### Created! 201
Caso essa resposta aconteça, você vai salvar a imagem.

Exemplo:
```
{
   "msg": "Arquivo enviado com sucesso"
}

```

