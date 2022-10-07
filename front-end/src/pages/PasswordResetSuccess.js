import { useHistory } from "react-router-dom";

export default function PasswordResetSuccess() {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Success!</h1>

      <p>
        Your password has been reset, now please login with your new password
      </p>

      <button onClick={() => history.push("/login")}>Go to login</button>
    </div>
  );
}
