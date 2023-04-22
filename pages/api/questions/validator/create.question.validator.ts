import { CreateBatchDto } from "../../interface/batch.t";
import { Batchschema } from "./create.question.schema";
const ValidateBatchCreationObject = async (batch: CreateBatchDto) => {
    try {
        const value = await Batchschema.validateAsync(batch);
        return value;
    }
    catch (err) {
        return err;
    }
}

export default ValidateBatchCreationObject;