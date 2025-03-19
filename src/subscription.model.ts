// weather-service/src/subscription.model.ts
import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'subscriptions' })
export class Subscription extends Model {
  @Column({ primaryKey: true, defaultValue: DataType.UUIDV4 })
  id: string;

  @ForeignKey(() => Subscription)
  @Column({ allowNull: false })
  dealer_id: string;

  @Column({ defaultValue: true })
  is_active: boolean;
}
