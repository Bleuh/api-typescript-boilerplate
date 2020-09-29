// src/services/api.service.ts

import { Request, Response, Express } from 'express';
import getEndpoints from 'express-list-endpoints';

export default class ApiService {
  static endPointsList(req: Request, res: Response): Response {
    return res.status(200).json(getEndpoints(<Express>req.app));
  }
}
