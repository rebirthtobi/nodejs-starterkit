import Joi from "@hapi/joi";

export const userSchema = Joi.object().keys({
    confirmationPassword: Joi.string().label("password confirmation")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "required password strength").required(),
    email:     Joi.string().email({ minDomainSegments: 2 }).required(),
    firstName: Joi.string().label("first name").trim().required(),
    lastName:  Joi.string().label("last name").trim().required(),
    password:  Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "required password strength").required(),
});
