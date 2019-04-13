... finish 53th
... continue on the 54. Checking If Data Exists Using Prisma Bindings

# be-graphql-basics
Basics for a node server from https://www.udemy.com/graphql-bootcamp/learn/v4/t/lecture/11838204?start=1

## set up a basic node server
#### babel compiler from the latest ES to Javascript the web browser understands (playground)
https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwFQpgHgLgfAygewLZgATmsA9B2Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3&externalPlugins=

#### init (create package.json)
> yarn init

#### install babel compiler
> yarn add babel-cli
> yarn add babel-preset-env

#### create a .babelrc file and set the preset env for it
> touch .babelrc

#### add a graphql module (simple and easy setup process with all advanced features (subsctiptions and more))
> yarn add graphql-yoga

#### live reload for the node server
> yarn add nodemon

## give bindings between prisma and node
> yarn add prisma-binding

## graphql cli
> yarn add graphql-cli

## after adding the .graphqlconfig and prisma.js, run:
> yarn get-schema