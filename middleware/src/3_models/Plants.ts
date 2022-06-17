import {model, Schema, Model, Document} from 'mongoose';

interface IPlant extends Document {
    no:string;
    Description: string;
    
}

const PlantSchema: Schema = new Schema({
  no: { type: String, required: true },
  Description: { type: String, required: true }

});

const Plant: Model<IPlant> = model('Plant', PlantSchema);

export {Plant,IPlant}