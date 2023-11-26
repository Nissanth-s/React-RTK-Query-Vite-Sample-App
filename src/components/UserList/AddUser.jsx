import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from 'formik';
import { Modal, Button } from "react-bootstrap";
import * as Yup from 'yup';

import {
    useAddUserMutation,
    useUpdateUserMutation,
} from "../../store/services/Users";
import './adduser.css'

const AddUser = (props) => {
    const [formSubmited, setFormSubmited] = useState(false)

    const [addUser, { isLoading }] = useAddUserMutation();

    const userValidationSchema = Yup.object({
        firstName: Yup.string().required('Please Enter Name'),
        designation: Yup.string().required('Please Select Designation'),
        status: Yup.string().required('Please Select Status'),
    });

    useEffect(() => {
        if (props.show) {
            setFormSubmited(false)
        }
    }, [props.show])
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
                    validationSchema={userValidationSchema}
                    onSubmit={(values) => {
                        addUser(values);
                        setFormSubmited(true)
                    }}
                >
                    {(formik) => {
                        const {
                            values,
                            handleChange,
                            handleSubmit,
                            errors,
                            touched,
                            handleBlur,
                            isValid,
                            dirty
                        } = formik;
                        return (
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
                                            <Field
                                                type="text"
                                                name="firstName"
                                                className="form-control"
                                                placeholder="Enter Name"
                                            />
                                            {formik.errors.firstName ? (
                                                <div className="form-error">{formik.errors.firstName}</div>
                                            ) : null}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputEmail1">Designation</label>
                                            <Field as="select" name="designation" className="form-control">
                                                <option>Select Designation</option>
                                                <option>Chief operations officer</option>
                                                <option>Chief executive officer</option>
                                                <option>Director</option>
                                                <option>Chief compliance officer</option>
                                                <option>President</option>
                                                <option>Chief financial officer</option>
                                                <option>Chief technology officer</option>
                                                <option>Vice-president</option>
                                            </Field>
                                            {formik.errors.designation ? (
                                                <div className="form-error">{formik.errors.designation}</div>
                                            ) : null}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputEmail1">Current Status</label>
                                            <Field as="select" name="status" className="form-control">
                                                <option>Select Status</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                                <option>Inprogress</option>
                                                <option>Blocked</option>
                                            </Field>
                                            {formik.errors.status ? (
                                                <div className="form-error">{formik.errors.status}</div>
                                            ) : null}
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </>
                                )}
                            </Form>
                        );
                    }}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddUser;