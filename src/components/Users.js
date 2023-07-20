import React from "react";
function Users({ users }) {
  return (
    <div className="users">
      <div className="grid-container">
        {users.map((user) => (
          <div key={user.id} className="user">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="grid-image"
            />
            <div className="grid-text">
              <h3>{`${user.first_name} ${user.last_name}`}</h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
