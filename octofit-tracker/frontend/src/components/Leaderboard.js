import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://friendly-tribble-4jgg4pp4wwvh99-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card mt-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="mb-0">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Username</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry._id}>
                <td>{entry.user && entry.user.username ? entry.user.username : entry.user}</td>
                <td>{entry.score}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success mt-3">Add Entry</button>
      </div>
    </div>
  );
}

export default Leaderboard;
