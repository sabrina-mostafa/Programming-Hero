import jwt, { JwtPayload } from 'jsonwebtoken';
// higher order function -> will return a function

import { NextFunction, Request, Response } from "express"
import config from '../config';

const auth = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            console.log({ authToken: token });

            if (!token) {
                return res.status(500).json({ message: "You are not allowed!!" });
            }
            const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;  // returns jwtPayload
            console.log({ decoded });

            req.user = decoded;   // set the payload as user on Request

            if(roles.length && !roles.includes(decoded.role)) {
                return res.status(500).json({
                    error: "Unauthorized!!!",
                });
            }
            next();

        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
}

export default auth;