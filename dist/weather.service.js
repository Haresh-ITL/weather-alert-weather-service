"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const common_1 = require("@nestjs/common");
const subscription_model_1 = require("./subscription.model");
const weather_preference_model_1 = require("./weather-preference.model");
const axios_1 = require("axios");
let WeatherService = class WeatherService {
    async subscribeDealer(data) {
        return subscription_model_1.Subscription.create({
            dealer_id: data.dealer_id,
            plan_price: data.plan_price,
            expires_at: new Date(data.expires_at),
            is_active: true,
        });
    }
    async setWeatherPreference(dealer_id, countries) {
        const existingPreference = await weather_preference_model_1.WeatherPreference.findOne({
            where: { dealer_id },
        });
        if (existingPreference) {
            existingPreference.countries = countries;
            await existingPreference.save();
            return existingPreference;
        }
        else {
            const newPreference = await weather_preference_model_1.WeatherPreference.create({
                dealer_id,
                countries,
            });
            return newPreference;
        }
    }
    async getWeather(country, lat, lon) {
        const apiKey = process.env.OPENWEATHER_API_KEY || "YOUR_API_KEY";
        const response = await axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response.data;
    }
    async getWeatherPreferences(dealer_id) {
        const preferences = await weather_preference_model_1.WeatherPreference.findAll({
            where: { dealer_id },
        });
        if (preferences.length === 0) {
            return {};
        }
        const preferenceWithMostCountries = preferences.reduce((prev, current) => {
            return prev.countries.length > current.countries.length ? prev : current;
        });
        const subscription = await subscription_model_1.Subscription.findOne({
            where: {
                dealer_id,
            },
        });
        const isExpired = new Date(subscription.expires_at) <= new Date();
        return {
            ...preferenceWithMostCountries,
            expired: isExpired,
        };
    }
};
exports.WeatherService = WeatherService;
exports.WeatherService = WeatherService = __decorate([
    (0, common_1.Injectable)()
], WeatherService);
//# sourceMappingURL=weather.service.js.map