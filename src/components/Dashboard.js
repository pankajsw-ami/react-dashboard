import React, { useEffect, useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Dashboard</h2>

      <button onClick={fetchUsers}>Refresh Data</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
