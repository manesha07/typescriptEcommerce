import Joi from 'joi';
import { AddUsers } from '../types';

const schema = Joi.object<AddUsers>({
  name: Joi.string().max(50).required(),
  username: Joi.string().max(50).required(),
  password: Joi.string().max(20).required(),
  email: Joi.string().email().max(50).required(),
}) ;

export default schema;