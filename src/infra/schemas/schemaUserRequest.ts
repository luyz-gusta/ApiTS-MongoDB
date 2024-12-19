import * as yup from "yup";
import { pt } from "yup-locale-pt";
import { UserModel } from "../../domain/models/user.model";

yup.setLocale(pt);

const schemaUser: yup.ObjectSchema<
  Omit<UserModel, "_id" | "isActive" | "createdAt">
> = yup.object({
  name: yup.string().defined().required().max(60),
  username: yup.string().defined().required().max(80).min(6),
  email: yup
    .string()
    .defined()
    .required()
    .max(255)
    .matches(
      /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
      "email inválido"
    ),
  profilePicture: yup.string().defined().required().max(400),
  password: yup.string().defined().required().max(255).min(6),
  userType: yup.string().defined().required().max(50),
  lastLogin: yup.date().optional().nullable(),
  updatedAt: yup.date().optional(),
});

export default schemaUser;
