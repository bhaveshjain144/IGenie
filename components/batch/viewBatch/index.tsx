import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
const ViewBatchComponent = (props: any) => {
    const [disableEditable, setDisableEditable] = useState(true)
    const [buttonText, setButtonText] = useState('Edit')
    const [batch, setBatch]: any = useState({})
    useEffect(() => {
        setBatch(props.batchData)
    }, [props.batchData])
    const editBatch = (event: any) => {
        event.preventDefault();
        setDisableEditable(false);
        setButtonText('Update')
    }
    const updateBatch = (event: any) => {
        event.preventDefault();
        setDisableEditable(true);
        setButtonText('Edit')
        props.updateBatch(event.target)
    }
    const onInputchange = (event: any) => {
        setBatch({
            [event.target.name]: event.target.value
        })
    }

    return (
        <Form onSubmit={buttonText == 'Edit' ? editBatch : updateBatch}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Code</Form.Label>
                <Form.Control name="code" type="text" disabled={true} value={batch?.code} onChange={onInputchange} placeholder="Enter Batch Code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" disabled={disableEditable} value={batch?.name} onChange={onInputchange} placeholder="Enter Batch Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" disabled={disableEditable} value={batch?.description} onChange={onInputchange} placeholder="Enter Batch Description" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBoarded">
                <Form.Label>Boarded on</Form.Label>
                <Form.Control name="boardedOn" type="date" disabled={disableEditable} value={batch?.boardedOn} onChange={onInputchange} placeholder="Enter Boarded Date" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBatchSize">
                <Form.Label>Batch Size</Form.Label>
                <Form.Control name="batchSize" type="number" disabled={disableEditable} value={batch?.batchSize} onChange={onInputchange} placeholder="Enter Batch Size" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBatchSize">
                <Form.Label>Training Status</Form.Label>
                <Form.Select name="trainingStatus" disabled={disableEditable} value={batch?.trainingStatus} onChange={onInputchange} placeholder="Enter Training Status" >
                    <option >{batch?.trainingStatus}</option>
                    <option value="NOT STARTED">NOT STARTED</option>
                    <option value="INPROGRESS">INPROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="ON HOLD">ON HOLD</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBatchSize">
                <Form.Label>Training Completed On</Form.Label>
                <Form.Control name="trainingCompletedOn" type="date" disabled={disableEditable} value={batch?.trainingCompletedOn} onChange={onInputchange} placeholder="Enter Training Completed On" />
            </Form.Group>
            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    {buttonText}
                </Button>
            </div>

        </Form>
    )
}
export default ViewBatchComponent;