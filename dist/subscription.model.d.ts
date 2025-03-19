import { Model } from 'sequelize-typescript';
export declare class Subscription extends Model {
    id: string;
    dealer_id: string;
    is_active: boolean;
}
