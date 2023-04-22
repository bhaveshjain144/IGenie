import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import RatingComponent from "../../rating";
const ViewTraineeComponent = (props: any) => {
    const [buttonText, setButtonText] = useState('Edit')
    const [trainee, setTrainee]: any = useState({})
    const [readOnly, setReadOnly] = useState(true)
    const [loading, setLoading] = useState(true)
    const [batchs, setBatchs] = useState([])
    const [projects, setProjects] = useState([])
    const [rating, setRating]: any = useState(0)
    const [onInternship, setOnInternship]: any = useState(0)
    const [showProjectSelector, setShowProjectSelector]: any = useState(false)
    useEffect(() => {

        if (loading) {
            setTrainee(props.traineeData)
            setBatchs(props.batchs)
            setProjects(props.projects)
            setLoading(false)
            setRating(props.traineeData.rating)
            setOnInternship(props.traineeData.onInternship)
        }
    }, [loading])
    const editTrainee = (event: any) => {
        event.preventDefault();
        setReadOnly(false);
        setButtonText('Update')
    }
    const updateTrainee = (event: any) => {
        event.preventDefault();
        // setReadOnly(true);
        setButtonText('Edit')
        props.updateTrainee(event.target)
    }
    const downloadResume = (event: any) => {
        event.preventDefault();
        props.downloadResume();
    }
    const onInputchange = (event: any) => {

        setTrainee({
            [event.target.name]: event.target.value
        })
    }
    const onCheckboxChange = (event: any) => {
        event.stopPropagation();
        setTrainee({
            [event.target.name]: event.target.value
        })
    }
    const transfertTrainee = (event: any) => {
        if (event.target.value?.toLowerCase() == 'project') {
            setShowProjectSelector(true)
        } else {
            setShowProjectSelector(false)
        }

    }
    const assignToProject = (event: any) => {

    }
    return (
        <Form onSubmit={buttonText == 'Edit' ? editTrainee : updateTrainee}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                <Form.Label column sm="2">
                    <b>Name</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="name" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.name} placeholder="Enter Tainee Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrimaryMail">
                <Form.Label column sm="2">
                    <b>Primary Email</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" name="email" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.email} placeholder="Enter Primary Email Address" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextSecondaryMail">
                <Form.Label column sm="2">
                    <b>Secondary Email</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="email" name="secondaryEmail" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.secondaryEmail} placeholder="Enter Secondary Email Address" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPrimarySkills">
                <Form.Label column sm="2">
                    <b>Primary Skills</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="primarySkills" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.primarySkills} placeholder="Eg:- skill1,skill2" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formSecondarySkills">
                <Form.Label column sm="2">
                    <b>Secondary Skills</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="secondarySkills" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.secondarySkills} placeholder="Eg:- skill1,skill2" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formRating">
                <Form.Label column sm="2">
                    <b>Rating</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="number" name="rating" className="d-none" readOnly={readOnly} plaintext={readOnly} value={rating} placeholder="Enter Rating" />
                    <RatingComponent readOnly={readOnly} rating={rating} setRating={setRating}></RatingComponent>
                </Col>
            </Form.Group>

            {trainee?.batchId ? <Form.Group as={Row} className="mb-3" controlId="formTraningBatch">
                <Form.Label column sm="2">
                    <b>Batch</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Select name="batch" disabled={readOnly} onChange={assignToProject} placeholder="Select Batch" >
                        {
                            batchs?.map((batch: any, index: number) => (
                                <option key={index} selected={trainee?.batchId?.id === batch.id} value={`/batchs/${batch.id}`}>{batch.name}</option>
                            ))
                        }

                    </Form.Select>
                </Col>
            </Form.Group> : null}


            <Form.Group as={Row} className="mb-3" controlId="formJoinedOn">
                <Form.Label column sm="2">
                    <b>Joined On</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="date" name="joinedOn" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.joinedOn} placeholder="Enter Joining Date" />
                </Col>
            </Form.Group>
            {
                readOnly && trainee?.resume ?
                    <Form.Group as={Row} className="mb-3" controlId="formResumeDonload">
                        <Form.Label column sm="2">
                            <b>Resume</b>
                        </Form.Label>
                        <Col sm="10">
                            <button onClick={downloadResume}>Download</button>
                        </Col>
                    </Form.Group> :
                    <Form.Group as={Row} className="mb-3" controlId="formResume">
                        <Form.Label column sm="2">
                            <b>Resume</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" readOnly={readOnly} name="resume" placeholder="Upload resume" />
                        </Col>
                    </Form.Group>
            }
            <Form.Group as={Row} className="mb-3" controlId="formInternship">
                <Form.Label column sm="2">
                    <b>On Internship</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Check onChange={() => setOnInternship(!onInternship)} disabled={readOnly} checked={onInternship} name="onInternship" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formMentorName">
                <Form.Label column sm="2">
                    <b>Mentors Name</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="mentorName" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.mentorName} placeholder="Eg:- Mentor Name1-Skill1,Mentor Name2-Skill2" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formtrainingLevel">
                <Form.Label column sm="2">
                    <b>Training Level</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Select name="trainingLevel" disabled={readOnly} placeholder="Select Training Level" >
                        {/* <option defaultValue={trainee?.trainingLevel} >{trainee?.trainingLevel}</option> */}
                        <option selected={trainee?.trainingLevel == 'BASIC'} value="BASIC" >Basic</option>
                        <option selected={trainee?.trainingLevel == 'ADVANCED'} value="ADVANCED" >Advanced</option>
                        <option selected={trainee?.trainingLevel == 'PROJECT_SPECIFIC'} value="PROJECT_SPECIFIC" >Project Specific</option>

                    </Form.Select>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formtrainingStatus">
                <Form.Label column sm="2">
                    <b>Training Status</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Select name="trainingStatus" disabled={readOnly} placeholder="Select Training Status" >
                        <option selected={trainee?.trainingStatus == 'NOT_STARTED'} value="NOT_STARTED" >Not Started</option>
                        <option selected={trainee?.trainingStatus == 'IN_PROGRESS'} value="IN_PROGRESS" >In Progress</option>
                        <option selected={trainee?.trainingStatus == 'ON_HOLD'} value="ON_HOLD" >On Hold</option>
                        <option selected={trainee?.trainingStatus == 'COMPLETED'} value="COMPLETED" >Completed</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            {
                (trainee?.trainingStatus == 'COMPLETED' || trainee?.onBench) && !trainee?.projectId ?
                    <Form.Group as={Row} className="mb-3" controlId="formtransferTo">
                        <Form.Label column sm="2">
                            <b>Transfer To</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select name="transferTo" disabled={readOnly} onChange={transfertTrainee} placeholder="Select Transfer To" >
                                <option>Select</option>
                                <option selected={trainee?.onBench} value="bench" >Bench</option>
                                <option selected={trainee?.projectId} value="project" >Project</option>
                            </Form.Select>
                        </Col>
                    </Form.Group> : null
            }
            {
                showProjectSelector || trainee?.projectId ?
                    <Form.Group as={Row} className="mb-3" controlId="formassignToProject">
                        <Form.Label column sm="2">
                            <b>Project</b>
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select name="assignToProject" disabled={readOnly} onChange={assignToProject} placeholder="Select Project" >
                                {
                                    projects?.map((project: any, index: number) => (
                                        <option key={index} selected={trainee?.projectId?.id == project.id} value={`/projects/${project.id}`}>{project.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    : null
            }
            <Form.Group as={Row} className="mb-3" controlId="formtraningFeedback">
                <Form.Label column sm="2">
                    <b>Traning Feedback</b>
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="textarea" name="traningFeedback" readOnly={readOnly} plaintext={readOnly} defaultValue={trainee?.traningFeedback} placeholder="Enter Training Feedback by the Trainee" />
                </Col>
            </Form.Group>
            {trainee?.trainingComplededOn ?
                <Form.Group as={Row} className="mb-3" controlId="formTrainingComplededOn">
                    <Form.Label column sm="2">
                        <b>Training Compleded </b>
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="date" name="trainingComplededOn" readOnly={true} plaintext={true} defaultValue={trainee?.trainingComplededOn} placeholder="Enter Training Completion Date" />
                    </Col>
                </Form.Group> : null
            }

            <div className="aliginBtnRight">
                <Button variant="primary" type="submit" className='btn btn-dark'>
                    {buttonText}
                </Button>
            </div>
        </Form>
    )
}
export default ViewTraineeComponent;