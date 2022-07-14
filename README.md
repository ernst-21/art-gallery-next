# Next.js Art Gallery App

Database is needed to run locally.

```
docker-compose up -d
```

- The ( -d )  means **detached**

## Set env variables

Rename the file **.env.template** to **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/art-db
```


- Install node modules and run next

```
yarn install
yarn dev
```

## Fill the database with test data

Call:

```
http://localhost:3000/api/seed
```
