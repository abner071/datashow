interface ICreateUserDTO {
  id?: string;
  church_id: string;
  name: string;
  email: string;
  password: string;
  contact: string;
  avatar?: string;
  updated_at?: Date;
}

export { ICreateUserDTO };
