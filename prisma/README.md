# be-prisma-orm-graphql
Using the ORM Prisma to connect to a PostgreSQL the graphQL!!

# SETUP:
## postgre database in heroku 
https://dashboard.heroku.com/apps/atafs-prisma-dev-server

## install a database gui (pgadmin)
https://www.pgadmin.org/

database name: d1mcj0ngloneji

## install docker (containers: in essence small virtual machines... we are just a user by docker to run a container)
https://hub.docker.com/editions/community/docker-ce-desktop-mac


# CREATE: (a prisma project)
https://www.prisma.io/

## init (same folder we are located... add the database credentials)
> prisma init .

## start prisma service and deploy docker
> docker-compose up -d

> prisma deploy

## localhost for prisma
http://localhost:4466/reviews/default
