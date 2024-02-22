import { Router, Request, Response, NextFunction } from "express";
import productService from "../../domain/service/product-service";
import { toResponse } from "../../domain/entity/product";

const router = Router();

router.get(
  "/products/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    res.json(toResponse(await productService.getById(req.params.id)));
    next();
  }
);

router.get(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    res.json((await productService.list()).map(toResponse));
    next();
  }
);

export default router;
