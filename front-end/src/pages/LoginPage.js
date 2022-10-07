import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { rAuthApi } from "../util/axiosUtils";
import { useToken } from "../auth/useToken";
import { useQueryParams } from "../util/useQueryParams";

function LoginPage() {
  const history = useHistory();
  const [, setToken] = useToken();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      history.push("/");
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("/auth/google/url");
        const { url } = response.data;
        setGoogleOauthUrl(url);
      } catch (error) {
        console.log(error);
      }
    };

    loadOauthUrl();
  }, []);

  const onLoginClicked = async () => {
    console.log("login");

    const user = {
      email: emailValue,
      password: passwordValue,
    };

    const res = await rAuthApi().post("/login", user);

    if (res) {
      const { token } = res.data;
      setToken(token);

      history.push("/");
    }
  };

  return (
    <div className="content-container">
      <h1>Log In</h1>

      {errorMessage && <div className="fail">Error while login in user</div>}
      <input
        defaultValue={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="someones@gmail.com"
      />
      <input
        defaultValue={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        type="password"
        placeholder="password"
      />
      <hr />
      <button disabled={!emailValue || !passwordValue} onClick={onLoginClicked}>
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot your password
      </button>
      <button onClick={() => history.push("/register")}>
        Don't have an account? Sign Up{" "}
      </button>

      <button
        disabled={!googleOauthUrl}
        onClick={() => {
          window.location.href = googleOauthUrl;
        }}
      >
        Login in with Google
      </button>
    </div>
  );
}

export default LoginPage;
