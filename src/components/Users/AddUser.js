import { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const submitUser = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "invalid input", message: "Please enter valid input" });
      return;
    }

    if (+age < 1) {
      setError({ title: "invalid age", message: "Please enter valid age" });
      return;
    }

    props.onAddUser(username, age);
  };

  const usernameChanged = (event) => {
    setUsername(event.target.value);
  };

  const ageChanged = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitUser}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={usernameChanged}
          ></input>
          <label>Age:</label>
          <input type="number" value={age} onChange={ageChanged}></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
}
