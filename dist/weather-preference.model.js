"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherPreference = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let WeatherPreference = class WeatherPreference extends sequelize_typescript_1.Model {
};
exports.WeatherPreference = WeatherPreference;
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], WeatherPreference.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => WeatherPreference),
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], WeatherPreference.prototype, "dealer_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)("text"),
    __metadata("design:type", Array)
], WeatherPreference.prototype, "countries", void 0);
exports.WeatherPreference = WeatherPreference = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'weather_preferences' })
], WeatherPreference);
//# sourceMappingURL=weather-preference.model.js.map