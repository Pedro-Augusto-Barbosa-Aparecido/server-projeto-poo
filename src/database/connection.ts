import { PrismaClient } from '@prisma/client';
import dotenv from "dotenv";

dotenv.config();

export class Connection {
  private static instance: Connection;
  private static isMethod: boolean = false;

  public db: PrismaClient;

  constructor () {
    if (!Connection.isMethod)
      throw new Error("Inicie a instancia pelo método getInstance()");

      this.db = new PrismaClient();
  }

  public static getInstance () {
    if (Connection.instance)
      return Connection.instance;

    Connection.isMethod = true;

    return new Connection();
  }

}
