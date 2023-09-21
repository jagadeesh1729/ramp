import { Box } from "@mui/material";
import React from "react";
import SigninTemplate from "../../components/templates/singinTemplet/index";
import MuiSignInSignUpTemplate from "../../components/organisms/signInBody";
interface SignInSignUpPageProps {
  signInPage: boolean;
}
const styles = {
  marginTop: "56px",
  paddingLeft:"20px"
};
const SignInSignUpPage = ({ signInPage }: SignInSignUpPageProps) => {

  return (
    <Box>
      {signInPage ? (
        <SigninTemplate body={<MuiSignInSignUpTemplate signIn sx={styles}/>} />
      ) : (
        <SigninTemplate
          body={<MuiSignInSignUpTemplate signIn={false} sx={styles} />}
        />
      )}
    </Box>
  );
};

export default SignInSignUpPage;
