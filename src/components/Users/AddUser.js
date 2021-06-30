import { useRef, useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [error, setError] = useState();
  const usernameRef = useRef();
  const ageRef = useRef();

  const submitUser = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

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
          <input type="text" ref={usernameRef}></input>
          <label>Age:</label>
          <input type="number" ref={ageRef}></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
}
