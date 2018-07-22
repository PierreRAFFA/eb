import { NextFunction, Request, Response, Router } from "express";
import * as productController from "./controllers/productController";

const router: Router = require('express').Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send('Server running successfully');
});
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// HEALTHCHECK
router.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('');
});

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// PRODUCT
router.get('/products/:id/suggestions-color', productController.search);

export default router;
