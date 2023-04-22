import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditUserComponent = (props: any) => {
    useEffect(() => {
        setUser(props.user)
    }, [props.user])
    const [user, setUser]: any = useState({})
    const editUser = (event: any) => {
        event.preventDefault();
        props.editUser(event.target);
    }
    const onInputchange = (event: any) => {
        setUser({
            [event.target.name]: event.target.value
        })
    }
    return (
        <Form onSubmit={editUser}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" value={user?.displayName} onChange={onInputchange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={user?.email} onChange={onInputchange} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Profile photo</Form.Label>
                <Form.Control name="photourl" type="text" placeholder="Profile photo URL" value={user?.photoURL} onChange={onInputchange} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    Well never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    Save
                </Button>
            </div>

        </Form>
    )
}
export default EditUserComponent;