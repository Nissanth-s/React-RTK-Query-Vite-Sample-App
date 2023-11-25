import React from "react";
import AddUser from './AddUser'
const UserList = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="container p-3 my-3 border">
            <div className="row">
                <div className="col text-right">
                    <button type="button" className="btn btn-primary mb-3" onClick={() => setModalShow(true)}>Add User</button>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Current Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Model popup start */}
                    <AddUser
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    {/* Model popup end */}
                </div>
            </div>
        </div>
    );
}

export default UserList;