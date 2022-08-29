import { Router, Request, Response } from 'express';
import { PATH } from '../utils/constant';

const router = Router();

router.get(PATH._LOGIN, (_req: Request, res: Response) => {
  res.send({
    message: 'logged in',
  });
});

export default router;
