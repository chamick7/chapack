import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
  Unique,
} from "sequelize-typescript";
import TransportCompany from "./transport-company.mode";
import User from "./user.model";

@Table({ tableName: "packages", timestamps: false })
class Package extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Unique("tracking_number")
  @Column
  tracking_number!: string;

  @BelongsTo(() => TransportCompany, { foreignKey: "transport_digit", targetKey: "digit" })
  transportCompany!: TransportCompany;

  @Column({ field: "transport_digit" })
  transportDigit!: string;

  @BelongsTo(() => User, { foreignKey: "receiver_id", targetKey: "id" })
  receiver?: User;

  @Column({ field: "receiver_id" })
  receiverId!: number;

  @BelongsTo(() => User, { foreignKey: "orderer_id", targetKey: "id" })
  orderer?: User;

  @Column({ field: "orderer_id" })
  ordererId?: number;

  @Default(Sequelize.fn("NOW"))
  @Column({ field: "arrived_at" })
  arrivedAt!: Date;

  @Column({ field: "received_at" })
  receivedAt?: Date;
}

export default Package;
