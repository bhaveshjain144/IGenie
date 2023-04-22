import { Form, Button } from "react-bootstrap";

const AddProjectComponent = (props: any) => {
    const addProject = (event: any) => {
        event.preventDefault();
        props.addProject(event.target);
    }
    return (
        <Form onSubmit={addProject}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Project Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" placeholder="Enter Project Description" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicManager">
                <Form.Label>Project Manager</Form.Label>
                <Form.Control name="pm" type="text" placeholder="Enter Project Manager Name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicManagerEmail">
                <Form.Label>Project Manager Email</Form.Label>
                <Form.Control name="pmemail" type="email" placeholder="Enter Project Manager Email" />
                <Form.Text className="text-muted">
                    Well never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    Add
                </Button>
            </div>

        </Form>
    )
}
export default AddProjectComponent;