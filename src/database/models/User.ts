interface UserProps {
  name: string;
  email: string;
  password: string;
  id?: number;
}

export class User {
  protected name: string;
  protected email: string;
  protected password: string;
  protected id: number;

  constructor ({ email, name, password, id }: UserProps) {
    this.email = email;
    this.name = name;
    this.password = password;

    if (id)
      this.id = id;
    else 
      this.id = -1;

  }

  get username () {
    return this.name;
  }

  get userEmail () {
    return this.email;
  }

  get userPassword () {
    return this.password;
  }

  get userId () {
    return this.id;
  }

}