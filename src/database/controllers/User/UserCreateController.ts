import { GenericResponse } from "../../../@types/controllers/controllers";
import { Connection } from "../../connection";
import { User } from "../../models/User";

export class UserCreateController {
  private connection: Connection;

  constructor () {
    this.connection = Connection.getInstance();
  }

  public async insert (user: User): Promise<GenericResponse> {
    try {  
      await this.connection.db.$executeRawUnsafe(
        `INSERT INTO User (name, email, password) VALUES('${user.username}',
        '${user.userEmail}',
        '${user.userPassword}');`
      );
      
      return {
        msg: `User '${user.username}', was created`,
        status: "success",
        obj: {
          name: user.username,
          email: user.userEmail
        }
      }

    } catch (err) {
      return {
        msg: "Houve um erro no sistema!",
        status: "fail",
        err,

      }
    }
  }
}
