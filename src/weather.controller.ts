import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) { }

  @Post('subscribe')
  async subscribe(@Body() data: { dealer_id: string }) {
    return this.weatherService.subscribeDealer(data.dealer_id);
  }

  @Post('set-preference')
  async setPreference(@Body() data: { dealer_id: string; countries: string[] }) {
    return this.weatherService.setWeatherPreference(data.dealer_id, data.countries);
  }


  @Get('current')
  async getWeather(@Query('country') country: string, @Query('lat') lat: string, @Query('lon') lon: string) {
    return this.weatherService.getWeather(country, lat, lon);
  }

  @Get('preferences')
  async getPreferences(@Query('dealer_id') dealer_id: string) {
    return this.weatherService.getWeatherPreferences(dealer_id);
  }
}
