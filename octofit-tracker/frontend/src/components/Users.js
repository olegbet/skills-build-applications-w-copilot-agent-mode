import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://friendly-tribble-4jgg4pp4wwvh99-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-success text-white">
        <h2 className="mb-0">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3">Add User</button>
      </div>
    </div>
  );
}

export default Users;
