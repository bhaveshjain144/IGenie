import { Form, Button } from "react-bootstrap";

const AddUserComponent = (props: any) => {
    const addUser = (event: any) => {
        event.preventDefault();
        props.addUser(event.target);
    }
    return (
        <Form onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Profile photo</Form.Label>
                <Form.Control name="photourl" type="text" placeholder="Profile photo URL" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
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
export default AddUserComponent;