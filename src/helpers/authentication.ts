import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserType } from "./types";

const { JWT_SECRET = "abcdefghijklmnopqrstuvwyz" } = process.env;

export const hashPassword = (plainPassword: string): string => {
    if (!plainPassword) {
        throw new Error("Error hashing password");
    }

    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(plainPassword, salt);
};

export const generateToken = (user: UserType): string => jwt.sign({
    sub:  user.id,
    user: {
        email:     user.email,
        firstName: user.firstName,
        lastName:  user.lastName,
    },
}, JWT_SECRET, {
    algorithm: "HS384",
    expiresIn: "2h",
});

export const isPasswordValid = (encryptedPassword: string, plainPassword: string): boolean => bcrypt.compareSync(plainPassword, encryptedPassword);

export const generateResetJWT = (id: any, resetToken: string, email: string): string => jwt.sign({
    email,
    resetToken,
    sub: id,
}, JWT_SECRET, { expiresIn: "24h" });

export const isTokenExpired = async (token: string) => {
    if (!token) {
        return true;
    }
    const jwtResponse: any = jwt.verify(token, JWT_SECRET);

    return !!jwtResponse.err;
};

export const decodeToken = (token: string) => jwt.decode(token);
