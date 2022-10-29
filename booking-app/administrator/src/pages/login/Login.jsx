import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [ credentials, setCredentials] = useState({
        Username: undefined,
        Password: undefined,
    });
    const navigate = useNavigate();
    const {  loading, error, dispatch} = useContext(AuthContext);
    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
          
          if(res.data.IsAdmin) {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/");
          } else {
            dispatch({ type: "LOGIN_FAILURE", payload: {message: "Permission is not allowed"} });
            navigate("/login");
          }
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
   

  return (
    <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="username" id="Username" onChange={handleChange} className="lInput"/>
            <input type="Password" placeholder="Password" id="Password" onChange={handleChange} className="lInput"/>
            <button onClick={handleClick} className="lButton">Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login