import Joi from 'joi';
import { UpdateUsers } from '../types';

const schema = Joi.object<UpdateUsers>({
  name: Joi.string().max(50).allow(null, ''),
  username: Joi.string().max(50).allow(null, ''),
  password: Joi.string().min(8).max(20).allow(null, ''),
  email: Joi.string().email().max(50).allow(null, ''),
});

export default schema;