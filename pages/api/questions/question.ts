import shortid from 'shortid';
import { DefaultErrorResponse, DefaultSuccessResponse } from "../interface/response.t";
import db from "../aws/db";
import CONST from '../const'
import { CreateBatchDto } from '../interface/batch.t';

export const addBatch = async (batch: CreateBatchDto): Promise<any> => {
    batch.id = shortid.generate();
    return new Promise((resolve) => {
        getBatchByCode(batch.code, CONST.RECORD_TYPE.BATCH).then((data) => {
            if (!data) {
                const params: any = {
                    TableName: process.env.DYNAMODB_TABLE_NAME,
                    Item: batch
                };
                db.put(params, (error, data) => {
                    if (error) {
                        DefaultErrorResponse.error = error;
                        resolve(DefaultErrorResponse);
                    } else {
                        DefaultSuccessResponse.data = batch;
                        resolve(DefaultSuccessResponse);
                    }
                })
            } else {
                DefaultErrorResponse.error = "Batch Already exist";
                resolve(DefaultErrorResponse);
            }
        })
    })
}
export const updateBatch = async (batch: CreateBatchDto, id: any): Promise<any> => {

    return new Promise((resolve) => {
        getBatchById(id, CONST.RECORD_TYPE.BATCH).then((data) => {
            if (data) {
                const patchObjetc = { ...data, ...batch }
                batch.id = id;
                batch.type = CONST.RECORD_TYPE.BATCH;
                const params: any = {
                    TableName: process.env.DYNAMODB_TABLE_NAME,
                    Key: {
                        id
                    },
                    Item: patchObjetc
                };
                db.put(params, (error, data) => {
                    if (error) {
                        DefaultErrorResponse.error = error;
                        resolve(DefaultErrorResponse);
                    } else {
                        DefaultSuccessResponse.data = batch;
                        resolve(DefaultSuccessResponse);
                    }
                })
            } else {
                DefaultErrorResponse.error = "Batch Not Found";
                resolve(DefaultErrorResponse);
            }
        })
    })
}
export const deleteBatch = async (id: string | any): Promise<any> => {
    return new Promise((resolve) => {
        getBatchById(id, CONST.RECORD_TYPE.BATCH).then((data) => {
            if (data) {
                const params: any = {
                    TableName: process.env.DYNAMODB_TABLE_NAME,
                    Key: {
                        id
                    }
                };
                db.delete(params, (error, data) => {
                    if (error) {
                        DefaultErrorResponse.error = error;
                        resolve(DefaultErrorResponse);
                    } else {
                        DefaultSuccessResponse.data = id;
                        resolve(DefaultSuccessResponse);
                    }
                })
            } else {
                DefaultErrorResponse.error = "Batch Not Found";
                resolve(DefaultErrorResponse);
            }
        })
    })
}
export const listBatch = async (): Promise<any> => {
    return new Promise((resolve) => {

        const params: any = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            FilterExpression: "#type = :recordType",
            ExpressionAttributeNames: {
                "#type": "type"
            },
            ExpressionAttributeValues: {
                ":recordType": CONST.RECORD_TYPE.BATCH
            }
        };
        db.scan(params, (error, data) => {
            if (error) {
                DefaultErrorResponse.error = error;
                resolve(DefaultErrorResponse);
            } else {
                DefaultSuccessResponse.data = {
                    batches: data.Items
                };
                resolve(DefaultSuccessResponse);
            }
        })
    })
}

export const getBatchByCode = async (code: string, type: string): Promise<any> => {
    return new Promise((resolve) => {

        const params: any = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            FilterExpression: "#bcode = :batchCode",
            ExpressionAttributeNames: {
                "#bcode": "code"
            },
            ExpressionAttributeValues: {
                ":batchCode": code
            }
        };
        db.scan(params, (error, data: any) => {
            if (error) {
                DefaultErrorResponse.error = error;
                resolve(DefaultErrorResponse);
            } else {
                if (data.Items.length && data.Items[0].type === type) {
                    resolve(data.Items[0]);
                } else {

                    resolve(false);
                }
            }
        })
    })
}

export const getBatchById = async (id: string, type: string): Promise<any> => {
    return new Promise((resolve) => {

        const params: any = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Key: {
                id
            }
        };
        db.get(params, (error, data: any) => {
            if (error) {
                DefaultErrorResponse.error = error;
                resolve(DefaultErrorResponse);
            } else {
                if (data.Item && data.Item.type == type) {
                    resolve(data.Item);
                } else {

                    resolve(false);
                }
            }
        })
    })
}



