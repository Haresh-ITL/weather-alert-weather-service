// weather-service/src/weather-preference.model.ts
import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'weather_preferences' })
export class WeatherPreference extends Model {
  @Column({ primaryKey: true, defaultValue: DataType.UUIDV4 })
  id: string;


  @Column({ allowNull: false })
  dealer_id: string;

  @Column("text")
  countries: string[];

}
