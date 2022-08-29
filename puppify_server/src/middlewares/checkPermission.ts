import { RolePermission } from './../entities/role_permission.entity';
import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { User, UserRole } from '../entities';

const getUserPermissions = (user: User) => {
  const permissions: Array<string> = new Array();

  // Get permissions from user role
  user.userRole.forEach((userRole: UserRole) => {
    userRole.role.rolePermission.forEach((rolePermission: RolePermission) => {
      permissions.push(rolePermission.permission.permission_name);
    });
  });

  // Get permissions from group user

  return permissions;
};

export const checkPermission = (permissions: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;

    //Get user role from the database
    const userRepository = AppDataSource.getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);

      // Check if user is active
      if (!user.active) throw new Error();

      //Check if array of authorized permissions includes the user's permission
      const userPermission = getUserPermissions(user);
      const hasPermission = permissions.every((val) =>
        userPermission.includes(val)
      );
      if (hasPermission) next();
      else res.status(401).send();
    } catch (id) {
      res.status(401).send();
    }
  };
};
