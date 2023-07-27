import { Request, Response } from 'express';

async function getAllProducts(req: Request, res: Response) {
  try {
    res.status(200).send({
      product_id: 1,
      name: 'TV 56"',
    });
  } catch (err: any) {
    console.log(err);
  }
}

export { getAllProducts };