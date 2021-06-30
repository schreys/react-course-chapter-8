import Card from "../../UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    props.users.length > 0 && (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    )
  );
}
