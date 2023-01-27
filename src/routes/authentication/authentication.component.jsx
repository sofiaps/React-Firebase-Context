import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";

import "./authentication.styles.scss";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(currentUser) {
      return navigate("/");
    }
  }, [currentUser, navigate])
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
