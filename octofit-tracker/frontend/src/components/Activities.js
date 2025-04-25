import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://friendly-tribble-4jgg4pp4wwvh99-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Activity Type</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity._id}>
                <td>{activity.user}</td>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
                <td>
                  <button className="btn btn-outline-info btn-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3">Add Activity</button>
      </div>
    </div>
  );
}

export default Activities;
