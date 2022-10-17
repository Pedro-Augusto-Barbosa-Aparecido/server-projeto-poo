import { Table } from "../@types/table";
import { Connection } from "./connection";

import colors from "colors";
colors.enable();

const connection = Connection.getInstance();

const createTable = (table: Table) => {
  connection.db.exec(`
    CREATE TABLE IF NOT EXISTS ${table.name} (
      ${table.body}
    );
  `, (err) => {
    if (err)
      console.log(err);
    else
      console.log(`Table '${table.name}' success created!`.underline.green)
  });
}

const TABLES: Table[] = [
  {
    name: "user",
    body: `
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      password VARCHAR(255)
    `
  }
]

// create tables
TABLES.forEach(table => {
  console.log(`Creating table '${table.name}'`.underline.gray);
  createTable(table);
});

connection.db.close();
