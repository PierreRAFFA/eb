import { NextFunction, Request, Response, Router } from "express";

const routes: Router = require('express').Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server running successfully');
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// HEALTHCHECK
routes.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('');
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// EXAMPLE

export default routes;
