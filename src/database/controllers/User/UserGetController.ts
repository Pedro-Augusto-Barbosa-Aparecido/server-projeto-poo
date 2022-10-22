import { Prisma } from "@prisma/client";
import { Connection } from "../../connection";
import { Formatter } from "../../utils/formatter";

interface UserGetFilterParams {
  id?: string | number;
  email?: string;
}

export class UserGetController {
  private connection: Connection;

  constructor () {
    this.connection = Connection.getInstance();
  }

  public async get (filter: UserGetFilterParams) {
    try {
      const filterCleaned = Formatter
                                  .formatUpdateAndCreateQuery(filter)
                                  .split(", ")
                                  .join(" AND ");
      const user = await this.connection.db.$queryRawUnsafe(
        `SELECT * FROM User WHERE ${filterCleaned};`
      );

      if (!user) 
        return {
          found: false,
          msg: "User not found!!"
        }
      
      return {
        found: true,
        user
      }
      
    } catch (err) {
      return {
        err,
        msg: "User not found!"
      }
    }
  }
}
