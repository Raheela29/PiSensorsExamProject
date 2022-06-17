"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Readings = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const ReadingsSchema = new mongoose_1.Schema({
    Id: { type: mongodb_1.ObjectId, required: false },
    Time: { type: Date, required: true },
    Temperature: { type: Number, required: true },
    Humidity: { type: Number, required: true },
    SoilMoisture: { type: Number, required: true }
});
const Readings = (0, mongoose_1.model)('Readings', ReadingsSchema);
exports.Readings = Readings;
//# sourceMappingURL=Readings.js.map