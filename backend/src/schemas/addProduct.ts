import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(200).required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  category: Joi.string().max(200).required(),
  images: Joi.string().max(200).required(),
});

export default schema;