# EarlyBirds

This repository contains:
- a microservice related to the products (import from csv, get dominant color from Google Vision API)
- the docker infrastructure

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
$ cd earlybirds-infrastructure
$ docker-compose up
```
  
## Import the products
Note that the url may not be valid anymore
```bash
$ docker exec -it eb-product npm run products:import https://s3.nofilecdn.io/g/v7SoNYralWuIjE7pnNLsXLPOfXXAVeuguy2tKJa0gviErmu85ZOSNNL6gGo1XXna/products.csv
```
  
## Get the dominant color
```bash
$ docker exec -it eb-product npm run products:color
```
