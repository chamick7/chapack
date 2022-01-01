import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  IsEmail,
  HasMany,
  Unique,
  Default,
  AllowNull,
} from "sequelize-typescript";
import InviteToken from "./invite-token.model";
import Package from "./package.model";

@Table({ tableName: "users" })
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Unique("username")
  @Column
  username!: string;

  @AllowNull(false)
  @Unique("email")
  @IsEmail
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  password!: string;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @AllowNull(false)
  @Default("member")
  @Column
  role!: string;

  @HasMany(() => Package, { foreignKey: "orderer_id" })
  packages?: Package[];

  @Column({ field: "created_at" })
  @CreatedAt
  createAt!: Date;

  @Column({ field: "updated_at" })
  @UpdatedAt
  updatedAt?: Date;
}

export default User;
