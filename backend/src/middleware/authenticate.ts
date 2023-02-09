import {expressjwt} from "express-jwt";
import * as dotenv from "dotenv";
dotenv.config({path : '.env'});
export default expressjwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256']
});