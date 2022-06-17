
import {connect} from 'mongoose';

export class DB{
  static async connect():Promise<void> {
       await connect(process.env.DB || "mongodb://localhost:27017/test");
      // await connect(process.env.DB || "mongodb://127.0.0.1:27017/test");
  }
}






// import "dotenv-safe/config";
// import { connect } from "mongoose";

// export class DB{
//   static async connect():Promise<void> {
// 	await process.env.MONGO_URI!, {
// 		dbName: "supertest",
// 		useCreateIndex: true,
//     useNewUrlParser: true,
//      useUnifiedTopology: true,
// 	};
//   }}


// //  import "dotenv-safe/config";
// //  import { connect } from "mongoose";
// //  var mongoose = require('mongoose');

// // try {
// //     var db = mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true,useUndefinedTopology:true,useCreateIndex:true, dbName: 'PiSensorsExamProject' });
// //     console.log('success connection');
// // }
// // catch (error) {
// //     console.log('Error connection: ' + error);
// // }

 