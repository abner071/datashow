interface ICreateChurchDTO {
  id?: string;
  name: string;
  address?: string;
  address_number?: string;
  district?: string;
  city?: string;
  state?: string;
  logo?: string;
  updated_at?: Date;
}

export { ICreateChurchDTO };
