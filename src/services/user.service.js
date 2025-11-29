import { UserModel } from "../models/user.model.js";

export const UserService = {
    async getAllUsers() {
       const users = await UserModel.findAll();
         return users;
    }
};    