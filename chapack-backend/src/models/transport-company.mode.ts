import { AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";

@Table({ tableName: "transport_company" })
class TransportCompany extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Unique("digit")
  @Column
  digit!: string;

  @Column
  name!: string;

  @Column({ field: "created_at" })
  @CreatedAt
  createAt!: Date;

  @Column({ field: "updated_at" })
  @UpdatedAt
  updatedAt?: Date;
}

export default TransportCompany;
