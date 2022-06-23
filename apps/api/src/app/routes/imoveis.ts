import {
  NextFunction,
  Response,
  Request,
  Router,
} from "express";

import {
  Imovel as IImovel,
} from '@cefwm-angular/common';

import { getCollection } from "../util/mongodb";

export const router: Router = Router();

router.get('/',async (req: Request, res: Response, next: NextFunction) => {
  const imoveis: IImovel[] = await getCollection<IImovel>(
    req.app,
    'imoveis',
  ).find().toArray();
  res.json(imoveis);
})
