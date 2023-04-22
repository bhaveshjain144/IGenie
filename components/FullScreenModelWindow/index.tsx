import { Col, Container, Modal, Row } from "react-bootstrap";

const FullScreenModelWindowComponent = (props: any) => {

    return (
        <Modal show={props.show} size="lg" fullscreen centered={true} onHide={props.setShow}>
            <Container fluid>
                <Row>

                    <div className="text-center model-heading ">
                        {props.title}
                        <span className="close-btn">
                            <button type="button" className="btn-close btn-close-full-scren" onClick={props.setShow} aria-label="Close"></button>
                        </span>
                    </div>
                </Row>
                <Row>
                    <Col xs={2} className="padding-left-0">
                    </Col>
                    <Col xs={8} >
                        <main className='main'>
                            {props.children}
                        </main>

                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </Modal>
    )
}
export default FullScreenModelWindowComponent;