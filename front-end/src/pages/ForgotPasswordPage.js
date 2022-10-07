import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { rAuthApi } from "../util/axiosUtils";

export const ForgotPasswordPage = () => {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmitClicked = async () => {
    try {
      await rAuthApi().put(`/forgot-password/${emailValue}`);
      setSuccess(true);
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return success ? (
    <div className="content-container">
      <h1>Success</h1>
      <p>Check your email for a reset link</p>
    </div>
  ) : (
    <div className="content-container">
      <h1>Forgot Password</h1>
      <p>Enter your email and we will send you a reset link</p>
      {errorMessage && <div className="fail">{errorMessage}</div>}

      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someones@gmail.com"
      />

      <button
        disabled={!emailValue}
        onClick={() => {
          onSubmitClicked();
        }}
      >
        Send Reset Link
      </button>
    </div>
  );
};
