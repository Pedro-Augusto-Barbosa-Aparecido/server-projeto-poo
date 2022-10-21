import { Connection } from "../../connection";

export class UserListController {
  private connection: Connection;

  constructor () {
    this.connection = Connection.getInstance();
  }

  public async list () {
    
  }
}
