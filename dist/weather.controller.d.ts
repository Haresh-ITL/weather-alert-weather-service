import { WeatherService } from './weather.service';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    subscribe(data: {
        dealer_id: string;
        plan_price: number;
        expires_at: string;
    }): Promise<import("./subscription.model").Subscription>;
    setPreference(data: {
        dealer_id: string;
        countries: string[];
    }): Promise<import("./weather-preference.model").WeatherPreference>;
    getWeather(country: string, lat: string, lon: string): Promise<any>;
    getPreferences(dealer_id: string): Promise<{}>;
}
