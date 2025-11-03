import { Router, type Request, type Response } from 'express';

export const healthRoutes: Router = Router();

healthRoutes.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});
