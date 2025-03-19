// weather-service/src/subscription.model.ts
import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'subscriptions', timestamps: true })
export class Subscription extends Model {
  @Column({ primaryKey: true, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  dealer_id: string;

  @Column({ defaultValue: true })
  is_active: boolean;

  @Column({ type: DataType.FLOAT, allowNull: false })
  plan_price: number;

  @Column({ type: DataType.DATE, allowNull: false })
  expires_at: Date;

  @Column({ field: 'created_at', allowNull: false })
  createdAt: Date;

  @Column({ field: 'updated_at', allowNull: false })
  updatedAt: Date
}
