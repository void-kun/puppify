import { Router } from 'express';
import { PATH } from '../utils/constant';
import AuthRouter from './auth.routes';

const router = Router();

router.use(PATH._AUTH, AuthRouter);

export default router;
