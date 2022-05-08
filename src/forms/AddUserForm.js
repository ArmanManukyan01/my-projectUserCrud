import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "",  email: "", phone: ""};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username || !user.email || !user.phone) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>User Name</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
        <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
        <label>Phone</label>
    <div>
    <input 
       type="tel" 
       name="phone"
       value={user.phone}
       onChange={handleInputChange}
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       size="20" minlength="9" maxlength="14"
       required 
       />
       <small>Format: 123-456-7890</small>
       </div>
      <button>Add New User</button>
    </form>
  );
};

export default AddUserForm;
