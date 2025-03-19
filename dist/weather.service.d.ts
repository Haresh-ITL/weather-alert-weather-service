import { Subscription } from './subscription.model';
import { WeatherPreference } from './weather-preference.model';
export declare class WeatherService {
    subscribeDealer(data: {
        dealer_id: string;
        plan_price: number;
        expires_at: string;
    }): Promise<Subscription>;
    setWeatherPreference(dealer_id: string, countries: string[]): Promise<WeatherPreference>;
    getWeather(country: string, lat: any, lon: any): Promise<any>;
    getWeatherPreferences(dealer_id: string): Promise<{}>;
}
