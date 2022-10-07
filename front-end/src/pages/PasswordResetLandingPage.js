import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { rAuthApi } from "../util/axiosUtils";
import { useToken } from "../auth/useToken";
import PasswordResetFail from "./PasswordResetFail";
import PasswordResetSuccess from "./PasswordResetSuccess";

function PasswordResetLandingPage() {
  const { passwordResetCode } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  if (isFailure) return <PasswordResetFail />;
  if (isSuccess) return <PasswordResetSuccess />;

  const onResetClicked = async () => {
    try {
      await rAuthApi().put(`/users/${passwordResetCode}/reset-password`, {
        newPassword: passwordValue,
      });

      setIsSuccess(true);
    } catch (error) {
      setIsFailure(true);
    }
  };

  return (
    <div className="content-container">
      <h1>Reset Password</h1>
      <p>Please enter a new password</p>

      <input
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        placeholder="Password"
      />
      <input
        type="password"
        value={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        placeholder="Confirm Password"
      />

      <button
        disabled={
          !passwordValue ||
          !confirmPasswordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={() => {
          onResetClicked();
        }}
      >
        Reset Password
      </button>
    </div>
  );
}

export default PasswordResetLandingPage;
