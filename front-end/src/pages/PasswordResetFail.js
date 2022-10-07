import { useHistory } from "react-router-dom";

export default function PasswordResetFail() {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Uh oh ... oh noo!</h1>

      <p>Something went wrong while trying to reset your password</p>

      <button onClick={() => history.push("/login")}>Back to login</button>
    </div>
  );
}
