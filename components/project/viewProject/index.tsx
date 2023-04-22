import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
const ViewProjectComponent = (props: any) => {
    const [disableEditable, setDisableEditable] = useState(true)
    const [buttonText, setButtonText] = useState('Edit')
    const [project, setProject]: any = useState({})
    useEffect(() => {
        setProject(props.projectData)
    }, [props.projectData])
    const editProject = (event: any) => {
        event.preventDefault();
        setDisableEditable(false);
        setButtonText('Update')
    }
    const updateProject = (event: any) => {
        event.preventDefault();
        setDisableEditable(true);
        setButtonText('Edit')
        props.updateProject(event.target)
    }
    const onInputchange = (event: any) => {
        setProject({
            [event.target.name]: event.target.value
        })
    }
    const onCheckboxChange = (event: any) => {
        setProject({
            [event.target.name]: event.target.checked ? 'Active' : 'Inactive'
        })
    }
    return (
        <Form onSubmit={buttonText == 'Edit' ? editProject : updateProject}>
            <Form.Group className="mb-3" controlId="formBasicCode">
                <Form.Label>Project Code</Form.Label>
                <Form.Control name="code" type="text" disabled={true} value={project?.code} onChange={onInputchange} placeholder="Project Code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" disabled={disableEditable} value={project?.name} onChange={onInputchange} placeholder="Enter Project Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" type="text" disabled={disableEditable} value={project?.description} onChange={onInputchange} placeholder="Enter Project Description" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPM">
                <Form.Label>Project Manager</Form.Label>
                <Form.Control name="pm" type="text" disabled={disableEditable} value={project?.manager} onChange={onInputchange} placeholder="Enter Project Manager Name" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPMEmail">
                <Form.Label>Project Manager Email</Form.Label>
                <Form.Control name="pmemail" type="email" disabled={disableEditable} value={project?.pmEmail} onChange={onInputchange} placeholder="Enter Project Manager Email" />
                <Form.Text className="text-muted">
                    Well never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicStatus">
                <Form.Label>Project Status</Form.Label>
                <Form.Check name="status" disabled={disableEditable} onChange={onCheckboxChange} checked={project?.status?.toLowerCase() == 'active' ? true : false} />

            </Form.Group>
            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    {buttonText}
                </Button>
            </div>

        </Form>
    )
}
export default ViewProjectComponent;