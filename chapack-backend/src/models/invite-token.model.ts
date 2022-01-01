import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import User from "./user.model";

@Table({ tableName: "invite_tokens" })
class InviteToken extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Column
  token!: string;

  @BelongsTo(() => User, { foreignKey: "inviter_id", targetKey: "id" })
  inviter?: User;
  @AllowNull(false)
  @Column({ field: "inviter_id" })
  inviterId!: number;

  @BelongsTo(() => User, { foreignKey: "receiver_id", targetKey: "id" })
  receiver?: User;
  @Column({ field: "receiver_id" })
  receiverId?: number;

  @AllowNull(false)
  @Column({ field: "expired_date" })
  expiredDate!: Date;

  @AllowNull(false)
  @Default(true)
  @Column
  valid!: boolean;

  @Column({ field: "created_at" })
  @CreatedAt
  createAt!: Date;

  @Column({ field: "updated_at" })
  @UpdatedAt
  updatedAt?: Date;
}

export default InviteToken;
