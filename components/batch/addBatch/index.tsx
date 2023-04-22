import { Form, Button } from "react-bootstrap";

const AddBatchComponent = (props: any) => {
    const addBatch = (event: any) => {
        event.preventDefault();
        props.addBatch(event.target);
    }
    return (
        <Form onSubmit={addBatch}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Batch Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" placeholder="Enter Batch Description" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBoarded">
                <Form.Label>Boarded on</Form.Label>
                <Form.Control name="boardedOn" type="date" placeholder="Enter Boarded Date" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBatchSize">
                <Form.Label>Batch Size</Form.Label>
                <Form.Control name="batchSize" type="number" placeholder="Enter Batch Size" />
            </Form.Group>
            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    Add
                </Button>
            </div>

        </Form>
    )
}
export default AddBatchComponent;