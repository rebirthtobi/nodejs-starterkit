import { Request, Response } from "express";
import User from "../models/user";

export default class UserController {
    createUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const {
                firstName, lastName, phoneNumber, gender, email, password, confirmationPassword,
            } = req.body;
            if (password !== confirmationPassword) {
                return res.status(403).json({ response: "Confirm password not the same as password" });
            }
            await User.create({
                confirmationPassword, email, firstName, gender, lastName, phoneNumber,
            });

            return res.status(200).json({ response: "SignUp successful, check your email for validation" });
        } catch (e) {
            return res.status(500).json({ response: e.message });
        }
    };
}
