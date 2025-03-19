import { Model } from 'sequelize-typescript';
export declare class WeatherPreference extends Model {
    id: string;
    dealer_id: string;
    countries: string[];
}
