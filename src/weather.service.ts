import { Injectable } from "@nestjs/common";
import { Subscription } from "./subscription.model";
import { WeatherPreference } from "./weather-preference.model";
import axios from "axios";
import { Op } from "sequelize";

@Injectable()
export class WeatherService {
  async subscribeDealer(data: {
    dealer_id: string;
    plan_price: number;
    expires_at: string;
  }) {
    return Subscription.create({
      dealer_id: data.dealer_id,
      plan_price: data.plan_price,
      expires_at: new Date(data.expires_at),
      is_active: true,
    });
  }

  async setWeatherPreference(dealer_id: string, countries: string[]) {
    const existingPreference = await WeatherPreference.findOne({
      where: { dealer_id },
    });

    if (existingPreference) {
      existingPreference.countries = countries;
      await existingPreference.save();
      return existingPreference;
    } else {
      const newPreference = await WeatherPreference.create({
        dealer_id,
        countries,
      });
      return newPreference;
    }
  }

  async getWeather(country: string, lat: any, lon: any) {
    const apiKey = process.env.OPENWEATHER_API_KEY || "YOUR_API_KEY";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    return response.data;
  }

  async getWeatherPreferences(dealer_id: string) {
    const preferences = await WeatherPreference.findAll({
      where: { dealer_id },
    });

    if (preferences.length === 0) {
      return {};
    }

    const preferenceWithMostCountries = preferences.reduce((prev, current) => {
      return prev.countries.length > current.countries.length ? prev : current;
    });

    const subscription = await Subscription.findOne({
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
}
