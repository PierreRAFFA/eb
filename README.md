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
  
## Google Vision Certificate

The certificate has to be replaced in earlybirds-product/certificate.json
  
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

## Endpoint to test the suggestions by color
```bash
http://localhost:3000/products/L1212-00-001/suggestions-color
http://localhost:3000/products/L1212-00-132/suggestions-color
```
