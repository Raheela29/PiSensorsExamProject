import { Int32, IntegerType, ObjectId, Timestamp } from 'mongodb';
import {model, Schema, Model, Document, Date} from 'mongoose';

interface IReadings extends Document {
    Id: ObjectId;
    Time: Timestamp;
    Temperature: String;
    Humidity: String;
    SoilMoisture: String;
    Plant_Id: null;

}

const ReadingsSchema: Schema = new Schema({
    Id: { type: ObjectId, required: false },
    Time:{ type: Date, required: true },
    Temperature:{ type: Number, required: true },
    Humidity:{ type: Number , required: true },
    SoilMoisture:{ type: Number, required: true }

});

const Readings: Model<IReadings> = model('Readings', ReadingsSchema);

export {Readings,IReadings}