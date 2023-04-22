import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const AddTraineeComponent = (props: any) => {
    const [readOnly, setReadOnly] = useState(true)
    const [plaintext, setPlaintext] = useState(true)
    const [loading, setLoading] = useState(true)
    const [batchs, setBatchs] = useState([])
    useEffect(() => {
        if (loading) {
            setBatchs(props.batchs)
            setLoading(false)
        }

    }, [loading])
    const addTrainee = (event: any) => {
        event.preventDefault();
        props.addTrainee(event.target);
    }
    const onCheckboxChange = (event: any) => {
        // setProject({
        //     [event.target.name]: event.target.checked ? 'Active' : 'Inactive'
        // })
    }
    return (
        <Form onSubmit={addTrainee}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Label column sm="2">
                    <b>Name</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="name" placeholder="Enter Tainee Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrimaryMail">
                <Form.Label column sm="2">
                    <b>Primary Email</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" name="primariEmail" placeholder="Enter Primary Email Address" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextSecondaryMail">
                <Form.Label column sm="2">
                    <b>Secondary Email</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" name="secondaryEmail" placeholder="Enter Secondary Email Address" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPrimarySkills">
                <Form.Label column sm="2">
                    <b>Primary Skills</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="primarySkills" placeholder="Eg:- skill1,skill2" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formSecondarySkills">
                <Form.Label column sm="2">
                    <b>Secondary Skills</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="secondarySkills" placeholder="Eg:- skill1,skill2" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formTraningBatch">
                <Form.Label column sm="2">
                    <b>Batch</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Select name="batch" placeholder="Select Batch" >
                        <option value='' >Select</option>
                        {
                            batchs?.map((batch: any, index: number) => (
                                <option key={index} value={`/batchs/${batch.id}`}>{batch.name}</option>
                            ))
                        }

                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formJoinedOn">
                <Form.Label column sm="2">
                    <b>Joined On</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="date" name="joinedOn" placeholder="Enter Joining Date" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formResume">
                <Form.Label column sm="2">
                    <b>Resume</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="file" name="resume" placeholder="Upload resume" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formInternship">
                <Form.Label column sm="2">
                    <b>On Internship</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Check onChange={onCheckboxChange} name="onInternship" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formMentorName">
                <Form.Label column sm="2">
                    <b>Mentors Name</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="mentorName" placeholder="Eg:- Mentor Name1-Skill1,Mentor Name2-Skill2" />
                </Col>
            </Form.Group>
            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    Add
                </Button>
            </div>
        </Form>
    )
}
export default AddTraineeComponent;