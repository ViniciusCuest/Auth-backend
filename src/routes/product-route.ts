import { Router } from "express";
import { getAllProducts } from '../controllers/product-controller';

const productRoutes = Router();

productRoutes
    .get('/products', getAllProducts);

export default productRoutes;

