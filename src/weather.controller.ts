import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) { }

  @Post('subscribe')
  async subscribe(@Body() data: { 
    dealer_id: string;
    plan_price: number;
    expires_at: string;
  }) {
    return this.weatherService.subscribeDealer(data);
  }

  @Post('set-preference')
  @UseGuards(JwtAuthGuard)
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
