# API NodeJS com Express e MongoDB

Instalar:

- NodeJS: https://nodejs.org/en/
- Yarn: https://yarnpkg.com/en/docs/install
- MongoDB: https://docs.mongodb.com/manual/installation/


Nosso back end não conterá código do front end, ou seja, nada de código HTML ou CSS. Teremos uma [API](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces) (Interface de Programação de Aplicações) servindo como canal comunicação com o servidor.


## Criando o projeto

Assumindo que já tenha instalado o Node.js, crie um diretório para conter o seu aplicativo, e torne-o seu diretório ativo.

```
$ mkdir marvel-backend
$ cd marvel-backend
```

Use o comando `yarn init -y` ou `npm init -y` para criar um arquivo package.json para o seu aplicativo. Nele vão são registradas, entre outras coisas, as depedências do projeto.

```
$ yarn init -y
```

Agora instale a dependencia do Express, que é um framework para NodeJS que faz as tratativas de rotas e requests HTTP.

```
$ yarn add express
```

Abra o projeto em seu editor, aqui usaremos o Visual Studio Code.

```
$ code .
```

O servidor será dividido em 3 partes:
1. Routes
2. Controllers
3. Models

Rotas: crie um arquivo na raiz do projeto chamado `routes.js`.

