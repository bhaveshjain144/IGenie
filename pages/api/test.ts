import { NextApiRequest, NextApiResponse } from 'next';
import db from './aws/db';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log("req" + req.query)
    if (req.method === 'GET') {

        const params: any = {
            TableName: 'freshbee',
            ProjectionExpression:"fullName",
            KeyConditionExpression: "#uuid = :email",
            ExpressionAttributeNames: {
                "#uuid": "id"
            },
            ExpressionAttributeValues: {
                ":email": 'manu@gmail.com'
            }
        };
        db.query(params, function (error, data) {
            if (error) {
                console.log('Error', error);
                return res.status(500).json(
                    {
                        "success": false,
                        "data": {},
                        "error": {
                            "msg": "Internal Server Error",
                            "error": error
                        }
                    }
                )
            } else {
                // send the json response from the callback
                // res.json(data.Item);
                return res.status(200).json(
                    {
                        "success": true,
                        "data": data,
                        "error": {}
                    }
                )
            }

        });


    }

}
export default handler;
