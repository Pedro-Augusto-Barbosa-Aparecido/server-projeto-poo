import bcrypt from "bcrypt";

export const generateHash = (password: string) => bcrypt.hash(password, 10);
export const comparePassword = (password: string, dbPassword: string) => 
  bcrypt.compare(password, dbPassword);
