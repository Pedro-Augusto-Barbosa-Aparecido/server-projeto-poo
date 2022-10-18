import { Formatter } from './../generics/Formatter';
import { GenericResponse } from "../../../@types/controllers/controllers";
import { Connection } from "../../connection";
import { NUllishParameters } from "../../exceptions/funcExceptions";
import { User } from "../../models/User";

interface UserUpdateControllerProps {
  userId?: string;
  userEmail?: string; 
}

interface UserUpdateParams {
  name?: string;
  email?: string;
  password?: string;
}

export class UserUpdateController implements Formatter {
  private connection: Connection;
  private userId?: string;
  private userEmail?: string;

  constructor ({ userId, userEmail }: UserUpdateControllerProps) {
    if (!userEmail && !userId)
      throw new NUllishParameters("E-mail or userid is undefined!");

    this.userId = userId;
    this.userEmail = userEmail;

    this.connection = Connection.getInstance();
  }

  private getFilterQuery (): string {
    if (this.userId)
      return `id = ${this.userId}`;
    return `email = ${this.userEmail}`;
  }

  public cleanObject: (obj: Object) => string;

  public async update (newValues: UserUpdateParams): Promise<GenericResponse> {
    try {
      


      const user = await this.connection.db.$executeRawUnsafe(
        `UPDATE User SET  WHERE ${this.getFilterQuery()}`
      );

      return {
        msg: "User was updated",
        status: "success"
      }
    } catch (err) {
      return {
        msg: "User not found",
        status: "fail",
        err
      }
    }

  }
}
