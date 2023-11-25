import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddUser = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Designation</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Chief operations officer</option>
                            <option>Chief executive officer</option>
                            <option>Director</option>
                            <option>Chief compliance officer</option>
                            <option>President</option>
                            <option>Chief financial officer</option>
                            <option>Chief technology officer</option>
                            <option>Vice-president</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Current Status</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Inprogress</option>
                            <option>Blocked</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUser;