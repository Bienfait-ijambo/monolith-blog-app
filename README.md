## This Awesome Project Build with TypeORM/Node/TS/Graphql using clean architecture


This  awsome project is dedicated to someone who wants to get his hands on Graphql,Ts,TypeORM and also its a boilerplate for someone who wants to get involve in cloud native application Docker/Docker-Swarm etc.

The project has the following endpoint :

# User enpoints :

1. create user


```graphql
mutation createUser($input: CreateUserInput!){
  createUser(input: $input) {
    email
    role
  }
}

{
  "input": {
    "email": "bienfait@gmail.com",
    "password": "9092"
  }
}

```


2. login user


```graphql
mutation loginUser($input: CreateUserInput!){
  loginUser(input: $input) {
    email
    role
  }
}

{
  "input": {
    "email": "usi12852@gmail.com",
    "password": "password"
  }
}

```




3. updateUser

#### Response type
success:boolean

#### input
input:{
  userName:string
  id:number
}

```graphql
mutation updateUser($input: UpdateUserInput!){
  updateUser(input: $input) {
    success
  }
}

{
  "input": {
    "userName": "",
    "id": 1
  }
}

```

4. getUsers

```graphql
query getUsers{
  getUsers {
    id
    userName
    email
  }
}

```




# Post endpoints :

1. post endpoint


```graphql
mutation($input: CreatePostInput!){
  createPost(input: $input) {
    title
    content
  }
}

{
  "input": {
    "title": "",
    "content": ""
  }
}

```
2. get post


```graphql
query posts{
  posts {
    id
    title
    content
  }
}

```


Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run apollo` command

If you wanna run this app inside a container

1. Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build` command


