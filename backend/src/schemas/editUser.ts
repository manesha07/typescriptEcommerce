import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(50).allow(null, ''),
  username: Joi.string().max(50).allow(null, ''),
  password: Joi.string().min(8).max(20).allow(null, ''),
  email: Joi.string().email().max(50).allow(null, ''),
});

export default schema;