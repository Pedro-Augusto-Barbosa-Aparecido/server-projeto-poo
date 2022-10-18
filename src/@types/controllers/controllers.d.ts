export interface UserReturn {
  name: string;
  email: string;
}

export interface GenericResponse {
  status: "success" | "fail";
  obj?: UserReturn;
  msg: string;
  err?: any;
}