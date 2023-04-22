import { Container, Modal } from "react-bootstrap";

const ModelWindowComponent = (props: any) => {

    return (
        <Modal show={props.show} centered={true} onHide={props.setShow}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
        </Modal>
    )
}
export default ModelWindowComponent;