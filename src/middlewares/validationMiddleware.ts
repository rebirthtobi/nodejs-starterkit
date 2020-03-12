import { Schema, ValidationResult } from "@hapi/joi";
import { NextFunction, Request, Response } from "express";

const validator = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const validationValue: ValidationResult<any> = schema.validate(req.body, {
        abortEarly:    false,
        allowUnknown:  true,
        convert:       false,
        skipFunctions: true,
    });

    if (validationValue.error) {
        const errorMessages: Array<string> = validationValue.error.details.map(error => error.message);

        return res.status(400).json({ error: errorMessages });
    }

    return next();
};

export default validator;
