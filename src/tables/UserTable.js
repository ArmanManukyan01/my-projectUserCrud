import React from "react";
import '../index.css'
const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
    <div className="search-dev">
       <input
        onChange={props.handleSearch}
        type="text"
        id="search"
        name="search"
        value={props.searchTerm}
        placeholder="Search for user"
      />
    </div>
      {props.users.length > 0 ? (
        props.searchResult.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>....</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
