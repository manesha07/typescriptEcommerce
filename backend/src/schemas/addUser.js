import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(50).required(),
  username: Joi.string().max(50).required(),
  password: Joi.string().max(20).required(),
  email: Joi.string().email().max(50).required(),
});

export default schema;