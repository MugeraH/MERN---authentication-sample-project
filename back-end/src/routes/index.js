import { testRoute } from "./testRoute";
import { signUpRoute } from "./signUpRoute";
import { loginRoute } from "./loginRoute";
import { updateUserInfoRoute } from "./updateUserInfoRoute";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { ForgotPasswordRoute } from "./forgotPasswordRoute";
import { ResetPasswordRoute } from "./ResetPasswordRoute";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";
import { googleOauthCallbackRoute } from "./googleOauthCallbackRoute";
// import { testEmailRoute } from "./testEmailRoute";
export const routes = [
  testRoute,
  loginRoute,
  signUpRoute,
  updateUserInfoRoute,
  //   testEmailRoute,
  verifyEmailRoute,
  ForgotPasswordRoute,
  ResetPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute
];
