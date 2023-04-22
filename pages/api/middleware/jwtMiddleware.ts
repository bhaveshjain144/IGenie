import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export const jwtMiddleware = (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
    return new Promise((resolve) => {
        jwt.verify(req.headers.authorization as string, process.env.JWT_TOKEN_KEY as string, (response) => {
            resolve(response);
        })
    })

}