import { useHistory } from "react-router-dom";

export function EmailVerificationSuccess() {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Success!</h1>

      <p>
        Thanks for verifying your email, now you can use all application
        features
      </p>

      <button onClick={() => history.push("/")}>Go to home page</button>
    </div>
  );
}
