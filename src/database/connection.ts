import dotenv from "dotenv";
import sqlite3 from "sqlite3";

dotenv.config();

export class Connection {
  private static instance: Connection;
  private static isMethod: boolean = false;

  public db: sqlite3.Database;

  constructor () {
    if (!Connection.isMethod)
      throw new Error("Inicie a instancia pelo método getInstance()");

      this.db = new sqlite3.Database("./src/database/data/db.db", (err) => console.log(err));
  }

  public static getInstance () {
    if (Connection.instance)
      return Connection.instance;

    Connection.isMethod = true;

    return new Connection();
  }

}
