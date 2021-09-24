import { connect } from 'react-redux';
import { Component, useEffect, useState } from 'react';
import { Alert, Button, Card, FormControl, InputGroup, Modal } from 'react-bootstrap';
import ModalEdit from '../modal/modalEdit';

// data
import getData from '../../assets/data/dataSchedule';
import editData from '../../assets/data/editdata';
import deleteData from '../../assets/data/deleteData';

// style
import './ListSchedule.css';

const ListSchedule = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        props.setData();
    })

    const onChangeForm = () => {

    }

    return (
        <div className="list-schedule mt-5">
            {
                props.data.map((data) => {
                    return (
                        <Card key={data.id}>
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/weve-got-you-covered-during-lockdown-picture-id1287632111" />
                            <div className="number">{data.id}</div>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>

                                {
                                    data.status === 0 ?
                                        <Alert variant="danger">Not Complete</Alert>
                                        :
                                        <Alert variant="success">Complete</Alert>
                                }
                                <Card.Subtitle className="mb-2 mt-4 text-muted">Description</Card.Subtitle>
                                <Card.Text>{data.description}</Card.Text>
                                <Button variant="warning" onClick={handleShow} >Edit</Button>
                                <Button variant="danger" className="ms-2" onClick={() => props.deleteData(data.id)}>Delete</Button>
                            </Card.Body>
                        </Card>

                    )
                })
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
                        <FormControl id="title" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={onChangeForm} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Description</InputGroup.Text>
                        <FormControl id="description" as="textarea" aria-label="With textarea" onChange={onChangeForm} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const getGlobalState = (state) => {
    return { data: state.data }
}

const setGlobalState = (dispatch) => {
    return {
        setData: () => dispatch(getData()),
        editData: (data) => dispatch(editData(data)),
        deleteData: (id) => dispatch(deleteData(id))
    }
}

export default connect(getGlobalState, setGlobalState)(ListSchedule);