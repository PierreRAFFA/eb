# EarlyBirds

This repository contains:
- a microservice related to the products (import from csv, get dominant color from Google Vision API)
- the docker infrastructure

> In a normal situation, the microservice and the infrastructure should be in different repositories.  
> The microservice contains its own README

 
## Technical Overview
- NodeJS 
- Docker 
- Typescript  
- Express
- MongoDB
- Cucumber
- Winston
  
## Start

```bash
$ cd earlybirds-infrastructure && docker-compose up
```
  
## Execute the command to import the products from a remote csv
> the specified url may not be valid anymore
```bash
$ docker exec -it eb-product npm run products:import https://s3.nofilecdn.io/g/v7SoNYralWuIjE7pnNLsXLPOfXXAVeuguy2tKJa0gviErmu85ZOSNNL6gGo1XXna/products.csv
```
  
## Execute the command to get the dominant color for all products
```bash
$ docker exec -it eb-product npm run products:color
```

## Test all scenarios with Cucumber

```bash
$ cd earlybirds-product && npm test
```
