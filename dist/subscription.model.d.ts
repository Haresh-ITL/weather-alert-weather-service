import { Model } from 'sequelize-typescript';
export declare class Subscription extends Model {
    id: string;
    dealer_id: string;
    is_active: boolean;
    plan_price: number;
    expires_at: Date;
    createdAt: Date;
    updatedAt: Date;
}
