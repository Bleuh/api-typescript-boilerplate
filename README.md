# Api typescript boilerplate

API boilerplate in Typescript.

## Features

### User

- [Register/Login](#register/login)

## How to launch

```bash
# Clone the project
git clone https://github.com/Bleuh/api-typescript-boilerplate

# Install dependencies
yarn
```

I recommanded to use docker to launch the project.
You can find the install process [here](https://docs.docker.com/get-docker/).

```bash
docker-compose up
```

If you don't have docker, use the default `yarn start`, but you need to have the right environment (mongodb) in your `.env`.

You can now use the api on `http://localhost:3000/`

## Routes available

I will show you here some example for each route

> /

This route gives you all routes available

### Register/Login

> /register

```bash
curl --location --request POST 'localhost:3000/register' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'login=foo' \
--data-urlencode 'password=foo-password'
```

> /login

```bash
curl --location --request POST 'localhost:3000/login' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'login=foo' \
--data-urlencode 'password=foo-password'
```
