"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const mongodb_1 = require("mongodb");
const Readings_1 = require("../3_models/Readings");
const Plants_1 = require("../3_models/Plants");
class Api {
    static insertplant(no, Description) {
        throw new Error('Method not implemented.');
    }
    static getAllreadings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Readings_1.Readings.find({}, { _id: 0, __v: 0 });
            }
            catch (e) {
                console.error("Api getAllReadings(), " + e);
            }
            return [];
        });
    }
    static getAllPlants() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Plants_1.Plant.find({}, { _id: 0, __v: 0 });
            }
            catch (e) {
                console.error("Api getAllPlant(), " + e);
            }
            return [];
        });
    }
    static getReadings(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Readings_1.Readings.findOne({ 'Id': mongodb_1.ObjectId }, { _id: 0, __v: 0 });
            }
            catch (e) {
                console.error("Api getReadings(), " + e);
            }
        });
    }
    static getPlant(no) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Plants_1.Plant.findOne({ 'no': no }, { _id: 0, __v: 0 });
            }
            catch (e) {
                console.error("Api getPlant(), " + e);
            }
        });
    }
    static insertReadings(Reading) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const readings = new Readings_1.Readings(Object.assign({}, Reading));
                yield readings.save();
                return true;
            }
            catch (e) {
                console.error("Api insertReadings(), " + e);
                return false;
            }
        });
    }
    static updateReadings(Id, Time, Date, Temperature, Humidity, SoilMoisture, Plant_Id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (e) {
                console.error("Api updateReadinsg(), " + e);
            }
        });
    }
    static updatePlant(no, Description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Plants_1.Plant.findOneAndUpdate({ 'no': no }, { 'Description': Description }, { _id: 0, __v: 0 });
            }
            catch (e) {
                console.error("Api updatePlant(), " + e);
            }
        });
    }
    static deleteReadings(no) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Readings_1.Readings.findOneAndRemove({ 'Id': Number }, { _id: 0, __v: 0 });
            }
            catch (e) {
                console.error("Api getReadings(), " + e);
            }
        });
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map