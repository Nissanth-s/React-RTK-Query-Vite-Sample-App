import React, { useEffect } from "react";
import { useGetUsersQuery, useDeleteUserMutation } from "../../store/services/Users";
import AddUser from './AddUser'
import './userlist.css'

const UserList = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const { data, error, isLoading } = useGetUsersQuery();
    const [deleteUser, { isLoading: deleating }] = useDeleteUserMutation();

    const onDelete = (id) => {
        deleteUser(id);
    };

    return (
        <div className="container p-3 my-3 border">
            <div className="row">
                <div className="col text-right">
                    <button type="button" className="btn btn-primary mb-3" onClick={() => setModalShow(true)}>Add User</button>
                    {deleating && <div className="status-strip mb-3">Deleating User...</div>}
                    {isLoading ? (<div>
                        <p>Loading...</p>
                    </div>) : (
                        <>
                            {error ? (<div>
                                <p>Something went wrong, please try after some time!</p>
                            </div>) : (
                                <table className="table table-bordered">
                                    <thead className="thead-dark table-head">
                                        <tr>
                                            <th className="text-center" scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Current Status</th>
                                            <th className="text-center" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((user, index) => (
                                            <tr key={user.id}>
                                                <td className="text-center" scope="row">{index + 1}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.designation}</td>
                                                <td>{user.status}</td>
                                                <td className="delete-btn text-center">
                                                    <button onClick={
                                                        () => onDelete(user.id)}
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                        disabled={deleating ? true : false}
                                                    >Delete</button>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </>
                    )}

                    {/* Model popup start */}
                    <AddUser
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    {/* Model popup end */}
                </div>
            </div>
        </div >
    );
}

export default UserList;