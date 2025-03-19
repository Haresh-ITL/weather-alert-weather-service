// weather-service/src/weather.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { Subscription } from './subscription.model';
import { WeatherPreference } from './weather-preference.model';

@Module({
  imports: [SequelizeModule.forFeature([Subscription, WeatherPreference])],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
