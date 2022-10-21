import { generateHash } from './../../utils/password';
import { 
  Request, 
  Response, 
  Router 
} from "express";
import { UserCreateController } from "../../controllers/User/UserCreateController";
import { User } from "../../models/User";
import { 
  UserUpdateController, 
  UserUpdateParams 
} from '../../controllers/User/UserUpdateController';

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

userRoutes.put("/user/:id", async (req: Request, res: Response) => {
  const userId = req.params.id!;
  const valuesToUpdate = req.body as UserUpdateParams; 
  const userUpdateController = new UserUpdateController({ userId });
  
  try {
    const result = await userUpdateController.update(valuesToUpdate);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({
      err
    });
  }

});

export default userRoutes;
