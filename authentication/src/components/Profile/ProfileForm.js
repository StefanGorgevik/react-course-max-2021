import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router";

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const newPasswordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPW = newPasswordRef.current.value;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDAXwaY9MJe1tXk98ZO8MiL19yoLfzibOs`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        password: enteredPW,
        idToken: authCtx.token,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      //assumption: Always succeeds!
      history.replace("/");
    });
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
