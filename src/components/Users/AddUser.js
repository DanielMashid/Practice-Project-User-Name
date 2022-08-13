import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from '../UI/Button'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const UsernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) { // + is refer to enteredAge like is a number
      return
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <div className="input">
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" value={enteredUsername} onChange={UsernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
