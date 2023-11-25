import React, { useEffect, useState } from "react";
import { Formik, Form } from 'formik';
import { Modal, Button } from "react-bootstrap";

const AddUser = (props) => {
    const [formSubmited, setFormSubmited] = useState(false)
    useEffect(() => {
        return () => {
            setFormSubmited(false)
        }
    }, [props])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        firstName: "",
                        designation: "",
                        status: ""
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        setFormSubmited(true)
                    }}
                >
                    <Form>
                        {formSubmited === true ? (
                            <div className="text-center">
                                <div className="mb-3">User Added Successfully</div>
                                <Button onClick={() => { setFormSubmited(false) }}>Add New User</Button>
                            </div>

                        ) : (
                            <>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">First Name</label>
                                    <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter Name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Designation</label>
                                    <select className="form-control" id="designation" name="designation">
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
                                    <select className="form-control" id="status" name="status">
                                        <option>Active</option>
                                        <option>Inactive</option>
                                        <option>Inprogress</option>
                                        <option>Blocked</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </>
                        )}
                    </Form>
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUser;