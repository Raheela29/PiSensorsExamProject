import { IntegerType, ObjectId, Timestamp } from "mongodb";
import {IReadings, Readings} from "../3_models/Readings";
import {IPlant, Plant} from "../3_models/Plants";


class Api {
    static insertplant(no: any, Description: any) {
       throw new Error('Method not implemented.');
    }
    // CRUD support for plant and sensor Readings (Five methods):

    // #1
    static async getAllreadings(): Promise<IReadings[]> {
        try{
            return await Readings.find({}, {_id: 0, __v: 0});
        }
        catch (e){
            console.error("Api getAllReadings(), "+e)
        }
        return [];
    }

// for plant
        static async getAllPlants(): Promise<IPlant[]> {
        try{
            return await Plant.find({}, {_id: 0, __v: 0});
        }
        catch (e){
            console.error("Api getAllPlant(), "+e)
        }
        return [];
    }

    // #2
    static async getReadings(Id:IntegerType):Promise<any>{
        try{
            return await Readings.findOne({'Id': ObjectId  }, {_id: 0, __v: 0});
        }
        catch (e){
            console.error("Api getReadings(), "+e)
        }
    }


    // for plant
    static async getPlant(no:string):Promise<any>{
        try{
            return await Plant.findOne({'no': no}, {_id: 0, __v: 0});
        }
        catch (e){
            console.error("Api getPlant(), "+e)
        }
    }

    // #3

    static async insertReadings(Reading: IReadings):Promise<any>{


        try{
            const readings: IReadings = new Readings({
                ...Reading

            });
            await readings.save();
            return true;
        }
        catch(e){
            console.error("Api insertReadings(), "+e);
            return false;
        }
    }




    // #4
    static async updateReadings(Id: ObjectId,Time:Timestamp,Date:Date,Temperature: string,Humidity: string,SoilMoisture: string,Plant_Id: ObjectId):Promise<any>{
        try{
        //  return await Readings.findOneAndUpdate({ 'Id':Id},{'Time': Time },{'Temperature': Temperature},
        // {'Humidity': Humidity}, {'SoilMoisture': SoilMoisture},{_id: 0, __v: 0});

        }
        catch (e){
            console.error("Api updateReadinsg(), "+e);
        }
    }

    // for plant
    static async updatePlant(no:string, Description:string):Promise<any>{
        try{
            return await Plant.findOneAndUpdate({'no': no}, {'Description': Description}, {_id: 0, __v: 0});
        }
        catch (e){
            console.error("Api updatePlant(), "+e);
        }
    }


    // #5
    static async deleteReadings(no:string):Promise<any>{
        try{
            return await Readings.findOneAndRemove({'Id': Number}, {_id: 0, __v: 0});
        }
        catch (e){
            console.error("Api getReadings(), "+e)
        }
    }
}
export {Api}

// for plant
//     static async deletePlantt(no:string):Promise<any>{
//         try{
//             return await Plant.findOneAndRemove({'no': no}, {_id: 0, __v: 0});
//         }
//         catch (e){
//             console.error("Api getPlant(), "+e)
//         }
//     }
// }
// export {Api}



