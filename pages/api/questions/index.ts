import { error } from 'console';
import { NextApiRequest, NextApiResponse } from 'next';
import { DefaultErrorResponse, DefaultSuccessResponse } from '../interface/response.t';
import { jwtMiddleware } from '../middleware/jwtMiddleware';
import { addBatch, deleteBatch, listBatch, updateBatch } from './question';
import ValidateBatchCreationObject from './validator/create.question.validator';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    jwtMiddleware(req, res).then((response) => {
        if (response) {
            DefaultErrorResponse.error = 'unauthorized'
            return res.status(401).json(DefaultErrorResponse)
        } else {
            if (req.method === 'GET') {
                listBatch().then((data) => {
                    return res.status(200).json(data)
                }).catch((error) => {
                    return res.status(404).json(error)
                })
            } else if (req.method === 'POST') {
                ValidateBatchCreationObject(req.body).then((value) => {
                    if (value.details) {
                        DefaultErrorResponse.error = value.details;
                        return res.status(400).json(DefaultErrorResponse)
                    } else {
                        addBatch(value).then((data) => {
                            return res.status(200).json(data)
                        }).catch((error) => {
                            return res.status(200).json(error)
                        })
                    }

                }).catch((err) => {
                    DefaultErrorResponse.error = err;
                    return res.status(500).json(DefaultErrorResponse)
                })
            }
            else if (req.method === 'PATCH') {
                if (req.query.id) {
                    updateBatch(req.body, req.query.id).then((data) => {
                        return res.status(200).json(data)
                    }).catch((error) => {
                        return res.status(200).json(error)
                    })
                } else {
                    DefaultErrorResponse.error = "Please provide id ";
                    return res.status(200).json(DefaultErrorResponse)
                }

            } else if (req.method === 'DELETE') {
                if (req.query.id) {
                    deleteBatch(req.query.id).then((data) => {
                        return res.status(200).json(data)
                    }).catch((error) => {
                        return res.status(200).json(error)
                    })

                } else {
                    DefaultErrorResponse.error = "Please provide id ";
                    return res.status(200).json(DefaultErrorResponse)
                }
            }
        }
    })

}
export default handler;