import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('church')
class Church {
  @PrimaryColumn()
  id: string;
  
  @Column()
  name: string;
  
  @Column()
  address: string;
  
  @Column()
  address_number: string;
  
  @Column()
  district: string;
  
  @Column()
  city: string;
  
  @Column()
  state: string;
  
  @Column()
  logo: string;
  
  @CreateDateColumn()
  created_at: Date;
  
  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Church };
