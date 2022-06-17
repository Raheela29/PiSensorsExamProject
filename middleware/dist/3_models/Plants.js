"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plant = void 0;
const mongoose_1 = require("mongoose");
const PlantSchema = new mongoose_1.Schema({
    no: { type: String, required: true },
    Description: { type: String, required: true }
});
const Plant = (0, mongoose_1.model)('Plant', PlantSchema);
exports.Plant = Plant;
//# sourceMappingURL=Plants.js.map