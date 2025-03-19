// weather-service/src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather.module';
import { Subscription } from './subscription.model';
import { WeatherPreference } from './weather-preference.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'admin',
      database: process.env.DB_NAME || 'weather_alert',
      models: [Subscription, WeatherPreference],
      autoLoadModels: true,
      synchronize: true,
    }),
    WeatherModule,
  ],
})
export class AppModule {}
