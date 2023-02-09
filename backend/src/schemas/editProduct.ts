import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(100).allow(null, ''),
  description: Joi.string().max(200).allow(null, ''),
  price: Joi.number().allow(null, ''),
  stock: Joi.number().allow(null, ''),
  category: Joi.string().max(200).allow(null, ''),
  images: Joi.string().max(200).allow(null, ''),
});

export default schema;