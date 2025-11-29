import { UserService } from "../services/user.service.js";

export const  UserController = {
    async index(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json({ status:true, data: users });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

