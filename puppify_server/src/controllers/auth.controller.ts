import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';
import { AppDataSource } from '../config/database';
import { User } from '../entities';
import config from '../config';

class AuthController {
  static login = async (req: Request, res: Response, _next: NextFunction) => {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    //Get user from database
    const userRepository = AppDataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
      //Check if encrypted password match
      if (!User.compareHash(password, user.hash_password)) {
        res.status(401).send();
        return;
      }

      //Sign JWT
      const token = jwt.sign(
        { userId: user.user_id, username: user.username },
        config.JWT_SECRET,
        { expiresIn: config.JWT_EXPIRES }
      );

      //Send the jwt in the response
      res.send(token);
    } catch (error) {
      res.status(401).send();
    }
  };

  static register = async (
    req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const { username, password, firstname, lastname, email } = req.body;
    if (!(username && password && email)) {
      res.status(400).send();
    }

    // Create new User
    const user = new User();
    user.username = username;
    user.hash_password = password;
    user.email = email;
    user.firstname = firstname;
    user.lastname = lastname;
    const userRepository = AppDataSource.getRepository(User);

    try {
      await userRepository.save(user);

      //Sign JWT
      const token = jwt.sign(
        { userId: user.user_id, username: user.username },
        config.JWT_SECRET,
        { expiresIn: config.JWT_EXPIRES }
      );

      //Send the jwt in the response
      res.send(token);
    } catch (error) {
      res.status(401).send();
    }
  };
}

export default AuthController;
