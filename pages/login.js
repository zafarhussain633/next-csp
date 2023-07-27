import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      login check my font also by inspecting
      <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
    </>
  );
};

export default Login;
