import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useToken } from "../auth/useToken";
import { rAuthApi } from "../util/axiosUtils";

function RegisterPage() {
  const history = useHistory();
  const [token, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const onRegisterClicked = async () => {
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    const res = await rAuthApi().post("/signup", user);

    const { token } = res.data;

    // let userData = jwt_decode(token);
    // console.log(userData);
    setToken(token);

    history.push("/please-verify");
  };
  return (
    <div className="content-container">
      <h>Sign up</h>

      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        defaultValue={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someones@gmail.com"
      />
      <input
        defaultValue={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        defaultValue={confirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
        type="password"
        placeholder="Confirm password"
      />

      <hr />
      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onRegisterClicked}
      >
        Sign up
      </button>

      <button onClick={() => history.push("/login")}>
        Already have an account? Sign In{" "}
      </button>
    </div>
  );
}

export default RegisterPage;
