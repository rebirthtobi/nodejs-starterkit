import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

interface RequestType extends Request {
    user: User;
}

// eslint-disable-next-line consistent-return
export const validateUserToken = async (req: RequestType, res: Response, next: NextFunction) => {
    const tokenString = req.headers.authorization;
    if (!tokenString || !tokenString.startsWith("Bearer ")) {
        return res.status(403).end();
    }
    const tokenArray = tokenString.split(" ");
    if (!tokenArray || tokenArray.length !== 2) {
        return res.status(403).end();
    }

    const token = tokenArray[1];
    try {
        // TODO: use the right type for decoded string
        const decoded: any = jwt.verify(token, (process.env.JWT_SECRET || "abcdefghijklmnopqrstuvwyz"));
        const response = await User.findByPk(decoded.sub);

        if (!response) {
            return res.status(403).end();
        }

        req.user = response;
        next();
    } catch (e) {
        return res.status(403).end();
    }
};
