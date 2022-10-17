import { IUserRequest } from './../../../@types/controllers/requests.d';
import { generateHash } from './../../utils/password';
import { Request, Response, Router } from "express";
import { UserCreateController } from "../../controllers/User/UserCreateController";
import { User } from "../../models/User";

const userRoutes = Router();

userRoutes.post("/user", async (req: Request, res: Response) => {
  const userCreateController = new UserCreateController();
  const hashPassword = await generateHash(req.body.password);
  const userToCreate = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    var insertResponse = await userCreateController.insert(userToCreate);
    return res.json({
      ...insertResponse
    })
  } catch (err) {
    return res.json({
      err
    })
  }


});

export default userRoutes;
