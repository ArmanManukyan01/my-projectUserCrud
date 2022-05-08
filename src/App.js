import React, { useEffect, useState } from "react";

import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

import "./App.css";

function App() {
  // dados
  const usersData = [
    { id: 1, name: "Anna", username: "12skda", email: "aaabbb@mail.ru", phone: '37444626266'},
    { id: 2, name: "Ars", username: "kfdse11", email: "bbb@mail.ru", phone: '37444626265'  },
    { id: 3, name: "David", username: "maket34", email: "aab@mail.ru",  phone: '37444626267' }
  ];

  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // adicionar user
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // excluir user
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "", email: "", phone: "" };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  // carregar user para editar
  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email, phone: user.phone });
  };

  // Atuaizar user
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    useEffect(() => {
      const result = users.filter(
        (person) =>
          person.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          person.username
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          person.phone.toString().includes(searchTerm.toLocaleLowerCase())
      );
      setSearchResult(result);
    }, [searchTerm]);
  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>List User</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow} 
          usersData={usersData}
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          searchResult={searchResult}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
