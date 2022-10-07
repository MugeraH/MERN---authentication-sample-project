import { useHistory } from "react-router-dom";

export function EmailVerificationFail() {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Uh oh ... oh noo!</h1>

      <p>Something went wrong while trying to verify your email</p>

      <button onClick={() => history.push("/signup")}>Back to signup</button>
    </div>
  );
}
