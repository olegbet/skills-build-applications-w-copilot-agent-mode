import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newWorkout, setNewWorkout] = useState({ name: '', description: '' });

  useEffect(() => {
    fetch('https://friendly-tribble-4jgg4pp4wwvh99-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleChange = e => setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  const handleAddWorkout = e => {
    e.preventDefault();
    // Here you would POST to the API
    setWorkouts([...workouts, { ...newWorkout, _id: Date.now() }]);
    setNewWorkout({ name: '', description: '' });
    setShowModal(false);
  };

  return (
    <div className="card mt-4">
      <div className="card-header bg-secondary text-white">
        <h2 className="mb-0">Workouts</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout._id}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
                <td>
                  <button className="btn btn-outline-info btn-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3" onClick={handleShowModal}>Add Workout</button>
        {/* Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Workout</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                </div>
                <form onSubmit={handleAddWorkout}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" name="name" value={newWorkout.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea className="form-control" name="description" value={newWorkout.description} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                    <button type="submit" className="btn btn-primary">Save Workout</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Workouts;
