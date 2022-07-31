import { React, useRef, useState } from "react";

import Box from '@mui/material/Box';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";
import userActions from '../../redux/actions/userActions';
import "./LoginSignUp.css";
import { useDispatch } from "react-redux";

import MetaData from "../more/Metadata";

import "react-toastify/dist/ReactToastify.css";
/* import GoogleSignUp from '../login/GoogleSignUp' */
import GoogleSignIn from '../login/GoogleSignIn'

const LoginSignup = () => {

  const dispatch = useDispatch();


  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();

    const logedUser = {

      email: e.target[0].value,
      password: e.target[1].value,
      from: 'signup'
    }

    dispatch(userActions.signInUser(logedUser))
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      from: 'signup'
    }

    dispatch(userActions.signUpUserMessage(userData))


  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };





  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };
  return (
    <>
      <Box className="background-image">



        <>

          <MetaData title="Login or Signup" />
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>INICIAR SESION</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTRO</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                {/* <Link to="/password/forgot">¿Has olvidado tu contraseña ?</Link> */}
                <input type="submit" value="Iniciar" className="loginBtn" />
                <GoogleSignIn />

                <Link to="/">
                  <span className="volver-inicio">Volver a página de Inicio</span>
                </Link>
              </form>

              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Nombre"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Registrarse" className="signUpBtn" />

                <Link to="/">
                  <span className="volver-inicio">Volver a pagina de Inicio</span>
                </Link>
              </form>
            </div>
          </div>
          <div></div>
          {/* <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}

        </>

      </Box>
    </>
  );
};

export default LoginSignup;

