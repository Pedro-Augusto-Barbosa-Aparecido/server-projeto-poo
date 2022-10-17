import { PrismaClient } from "@prisma/client";
import { Connection } from "../../connection";
import { User } from "../../models/User";

interface UserReturn {
  name: string;
  email: string;
}

interface ResponseUserCreate {
  success: "success" | "fail";
  obj?: UserReturn;
  msg: string;
  err?: any;
}

export class UserCreateController {
  private connection;

  constructor () {
    this.connection = new PrismaClient();
  }

  public async insert (user: User): Promise<ResponseUserCreate> {
    try {  
      await this.connection.$executeRawUnsafe(
        `INSERT INTO User (name, email, password) VALUES('${user.username}',
        '${user.userEmail}',
        '${user.userPassword}');`
      );
      
      return {
        msg: `User '${user.username}', was created`,
        success: "success",
        obj: {
          name: user.username,
          email: user.userEmail
        }
      }

    } catch (err) {
      return {
        msg: "Houve um erro no sistema!",
        success: "fail",
        err,

      }
    }
  }
}
