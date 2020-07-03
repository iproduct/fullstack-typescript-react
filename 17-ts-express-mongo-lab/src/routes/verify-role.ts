import { Request, Response, NextFunction } from 'express';
import { UserRepository } from './../dao/mongo-repository';
import { AppError } from '../model/errors';
import { Role } from '../model/user.model';
/*
 * Copyright (c) 2015-2017 IPT-Intellectual Products & Technologies (IPT).
 * All rights reserved.
 *
 * This file is licensed under terms of GNU GENERAL PUBLIC LICENSE Version 3
 * (GPL v3). The full text of GPL v3 license is providded in file named LICENSE,
 * residing in the root folder of this project.
 *
 */

export function verifyRole(roles: Role[]) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const paramUserId = req.params.userId;
    const userId = req['userId'];

    if (!userId) next(new AppError(403, `No userId provided.`)); //Error
    try {
      const user = await (<UserRepository>req.app.locals.userRepo).findById(userId)
      if (!user) {
        next(new AppError(404, `User not found.`)); //Error
        return;
      }
      if (roles.some(role => user.roles.some(r => r === role))) { // if the interection between required and actual user roles is not empty
        delete user.password;
        // if everything good, save user to request for use in other routes
        req['user'] = user;
        next();
      } else {
        next({ status: 403, message: `Not enough privilegies for this operation.` }); //Error
      }
    } catch (err) {
      next(err);
    }
  }
}


