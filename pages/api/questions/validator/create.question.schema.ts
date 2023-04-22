import Joi from "joi"
import CONST from '../../const'

export const Batchschema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
    batchSize: Joi.number().required(),
    description: Joi.string().allow(null, ''),
    boardedOn: Joi.date().required(),
    type: Joi.string().default(CONST.RECORD_TYPE.BATCH),
    disabled: Joi.boolean().default(false),
    trainingStatus: Joi.string().default(CONST.TRAING_STATUS.NOT_STARTED)
})