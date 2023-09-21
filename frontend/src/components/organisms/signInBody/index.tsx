import {
  Grid,
  IconButton,
  InputAdornment,
  Box,
  styled,
  TextField
} from '@mui/material';

import MuiTypography from "../../atoms/typography/index"
import theme from '../../../theme';
import {
  CONTINUE,
  EMAIL_LABEL,
  NAME_LABEL,
  PASSWORD_LABEL,
  SIGN_WITH_GOOGLE,
  STAY_SIGNED,
  SIGNUP,
  SIGNIN_HEADING,
  EMAIL_PLACEHOLDER,
  NAME_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  OR_TEXT,
  NO_ACCOUNT_LABEL,
  ALREADY_HAVE_ACCOUNT,
  RAMP_HEADING,
  SIGINUP_HEADING,
  SIGNINBUTTON,
  FORGOT_PASSWORD,  
} from  "../../../utils/constants"
import React,{ useState } from 'react';
import MuiIcons from "../../atoms/icon/index"
import Eye from '../../../../public/images/eye.svg';
import Google from '../../../../public/images/google.svg';
import MuiButton from "../../atoms/button/index";
import { useNavigate } from 'react-router-dom';
import EyeOff from "../../../../public/images/eye-of.svg"
import MuiCheckbox from '../../atoms/checkbox';
const ContinueButton = styled(MuiButton)({
  '&:hover': {
      backgroundColor: theme.palette.primary[500]
  }
});
const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
      height: '7px',
      width: '99%',
      borderRadius: '10px'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e5e7ed'
  },
  ".css-yvetkp-MuiButtonBase-root-MuiIconButton-root":{
    paddingRight:"4px",
  },
  ".css-4b8n78-MuiInputBase-root-MuiOutlinedInput-root":{
    paddingRight:"4px"
  },
  ".css-1i6w4cy-MuiFormControl-root-MuiTextField-root .MuiInputBase-input":{
    paddingLeft:"8px",
  }
});

 const style = {
  width: '100%',
  height: '7%'
};

interface SignInSignOutProps {
  signIn?: boolean;
  sx?: object;
}

const Component = ({ signIn, sx }: SignInSignOutProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(true);
  const [pwdError, setPwdError] = useState(true);
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
      event?: React.MouseEvent<HTMLButtonElement>
  ) => {
      event?.preventDefault();
  };
  const handleChange1 = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      setEmail(e.target.value);
      if (validEmail.test(email)) {
          setEmailErr(false);
      } else {
          setEmailErr(true);
      }
      if (password.length >= 6) {
          setPwdError(false);
      } else {
          setEmailErr(true);
      }
  };
  const handleChange2 = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      setPassword(e.target.value);

      if (validEmail.test(email)) {
          setEmailErr(false);
      } else {
          setEmailErr(true);
      }
      if (password.length >= 6) {
          setPwdError(false);
      } else {
          setEmailErr(true);
      }
  };
  const handleChange3 = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      setName(e.target.value);
      console.log(e.target.value, 'handleChange3');
  };

  const navigate = useNavigate();
  return (
      <Grid container sx={sx} maxWidth="470px" spacing={2.5}>
          <Grid item xs={12}>
              <MuiTypography
                  sx={{
                      color: theme.palette.highEmphasis.main,
                      paddingLeft: '30px',
                      paddingBottom: '30px'
                  }}
                  variant="h1"
                  text={RAMP_HEADING}
              />
          </Grid>
          <Grid item xs={12}>
              <Box
                  sx={{
                      display: 'flex',
                      paddingLeft: '68px',
                      paddingRight:"68px",
                      paddingTop:"44px",
                      paddingBottom:"48px",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.17)",
borderRadius: "4px"
                  }}
              >
                  <Grid container>
                      <Grid item xs={12}>
                          <MuiTypography
                              text={signIn ? SIGNIN_HEADING : SIGNUP}
                              variant="h2"
                              sx={{ color: theme.palette.highEmphasis.main,paddingBottom:"32px"}}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <Grid container spacing={2.5}>
                              {signIn ? (
                                  <></>
                              ) : (
                                  <Grid item xs={12}>
                                      <MuiTypography
                                          text={NAME_LABEL}
                                          variant="body2"
                                          sx={{
                                              color: theme.palette
                                                  .mediumEmphasis.main
                                          }}
                                      />
                                      <StyledTextField
                                          type="text"
                                          value={name}
                                          onChange={(e) => handleChange3(e)}
                                          placeholder={NAME_PLACEHOLDER}
                                          data-testid="user-input"
                                          sx={style}
                                      />
                                  </Grid>
                              )}
                              <Grid item xs={12}>
                                  <MuiTypography
                                      text={EMAIL_LABEL}
                                      variant="body2"
                                      sx={{
                                          color: theme.palette.mediumEmphasis
                                              .main,
                                              paddingBottom:"4px"
                                      }}
                                  />
                                  <StyledTextField
                                      type="email"
                                      value={email}
                                      onChange={(e) => handleChange1(e)}
                                      data-testid="email-input"
                                      placeholder={EMAIL_PLACEHOLDER}
                                      sx={style}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                              <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            columnGap: '70px'                                          
                                        }}
                                    >
                                        <MuiTypography
                                            text={PASSWORD_LABEL}
                                            variant="body2"
                                            sx={{
                                                color: theme.palette
                                                    .mediumEmphasis.main,
                                                    paddingTop:"15px",
                                                    paddingBottom:"4px"
                                            }}
                                        />
                                        {signIn ? (
                                            <MuiButton
                                                text={
                                                    <MuiTypography
                                                        text={FORGOT_PASSWORD}
                                                        variant="body2"
                                                        sx={{whiteSpace:"nowrap",maxHeight:"5px",paddingLeft:'15px'}}
                                                    />
                                                }
                                                variant="text"
                                            />
                                        ) : (
                                            <></>
                                        )}
                                    </Box>
                                  <StyledTextField
                                      type={
                                          showPassword ? 'text' : 'password'
                                      }
                                      data-testid="password-input"
                                      placeholder={PASSWORD_PLACEHOLDER}
                                      InputProps={{
                                          endAdornment: (
                                              <InputAdornment
                                                  position="end"
                                                  sx={{
                                                      cursor: 'pointer'
                                                  }}
                                              >
                                                  <IconButton
                                                      disableRipple={true}
                                                      data-testid="mouseDownEvent"
                                                      onClick={
                                                          handleClickShowPassword
                                                      }
                                                      onMouseDown={
                                                          handleMouseDownPassword
                                                      }
                                                  >
                                                      {showPassword ? (
                                                          <MuiIcons
                                                              src={Eye}
                                                              alt={
                                                                  'Not found'
                                                              }
                                                          />
                                                      ) : (
                                                          <MuiIcons
                                                              src={EyeOff}
                                                              alt={
                                                                  'Not found'
                                                              }
                                                          />
                                                      )}
                                                  </IconButton>
                                              </InputAdornment>
                                          )
                                      }}
                                      value={password}
                                      name="password"
                                      onChange={(e) => handleChange2(e)}
                                      sx={style}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                                  {signIn ? (
                                        <Grid item sx={{ paddingLeft: "10px" }}>
                                        <MuiCheckbox
                                          label={
                                            <MuiTypography
                                              text={STAY_SIGNED}
                                              variant="body2"
                                              sx={{
                                                color: theme.palette.mediumEmphasis.main,
                                                display: "inline",
                                                padding: "10px",
                                              }}
                                            />
                                          }
                                        />
                                      </Grid>
                                  ) : (
                                      <></>
                                  )}
                              </Grid>
                              <Grid item xs={12}>
                                  <ContinueButton
                                      fullWidth
                                      text={
                                          <MuiTypography
                                              text={CONTINUE}
                                              variant="body2"
                                              sx={{
                                                  color: theme.palette
                                                      .structural[100]
                                              }}
                                          />
                                      }
                                      sx={{
                                          backgroundColor:
                                              theme.palette.primary[500]
                                      }}
                                      variant="outlined"
                                      disabled={emailErr || pwdError}
                                      testId="button"
                                      onClick={() => {
                                          navigate('/insights');
                                      }}
                                  />
                              </Grid>
                              <Grid item xs={12}>
                <MuiTypography
                  text={
                    <MuiTypography
                      text={OR_TEXT}
                      variant="caption2"
                      sx={{ color: theme.palette.lowEmphasis.main }}
                    />
                  }
                  sx={{ textAlign: "center", maxWidth: "333px" }}
                />
              </Grid>
                              
                              <Grid item>
                                  <MuiButton
                                  fullWidth
                                      text={
                                          <MuiTypography
                                              text={
                                                  signIn
                                                      ? SIGN_WITH_GOOGLE
                                                      : SIGINUP_HEADING
                                              }
                                              variant="body2"
                                              sx={{
                                                  color: theme.palette
                                                      .mediumEmphasis.main,whiteSpace:"nowrap"
                                              }}
                                          />
                                      }
                                      sx={{
                                          paddingLeft:"100%",
                                          paddingRight:"100%",
                                          maxHeight: '34px',
                                          marginTop: '3%',
                                      }}
                                      variant="outlined"
                                      startIcon={
                                          <MuiIcons
                                              src={Google}
                                              alt="Not found"
                                          />
                                      }
                                  />
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </Box>
          </Grid>
          <Grid container alignItems="center" paddingTop='10px'>
        <Grid item>
          <MuiTypography
            text={signIn ? NO_ACCOUNT_LABEL : ALREADY_HAVE_ACCOUNT}
            sx={{ color: theme.palette.lowEmphasis.main, paddingLeft: "50px" }}
            variant="body2"
          />
        </Grid>
        <Grid item>
          <MuiButton
          testId="dummyButton"
            sx={{ minWidth: "20px", paddingLeft: "3px" }}
            text={
              <MuiTypography
                text={signIn ? SIGNUP : SIGNINBUTTON}
                sx={{ color: theme.palette.primary[500], display: "inline" }}
                variant="body2"
              />
            }
            onClick={()=>{signIn?navigate("/signup"):navigate("/signin")}}
          />

        </Grid>
      </Grid>
      </Grid>
  );
};

export default Component;
