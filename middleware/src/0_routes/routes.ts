
import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';//for security so database not access by everyone 
import bcrypt from 'bcrypt';
import { DB } from '../2_sessions/DB';
import {Api} from '../2_sessions/Api';
dotenv.config({ path: 'config/middleware.env' });

const routes = express();

routes.use(cors());
routes.use(bodyParser.json());
routes.use(express.static('public'));
const urlencode = bodyParser.urlencoded({ extended: true });


routes.post('/api/readings', async (req,res) => {

   console.log("readings route");
   
   const data = req.body
   console.log(data);
   console.log("supertest");


   const readings = await Api.insertReadings(data);
   return res.status(200).json(readings);
 });


// Not that simple endpoint but there is
// #4 the default (all other not valid routes)
routes.get('*', (req,res) =>{
   console.log("no route");
   
     return res.status(404).send('no such route');
});

export {routes}

