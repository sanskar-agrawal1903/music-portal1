import React , {useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom';
import axios from "axios";
// import "../sass/main.scss"


// const api = axios.create({
//     baseURL:`http://localhost:7000/` 
// })

class Login extends React.Component{

    // const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");

    state={
        email : "",
        password : ""
    }

    checkForLogin = ()=>{
        console.log("clicked");
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        console.log(email + " " + password);

        if(!email || !password){
            alert("Please fill email and password");
            return;
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const res =  re.test(String(email).toLowerCase());

        if(!res){
            alert("Please enter valid email address");
            return;
        }

        axios.get(`/login/${email}/${password}`)
            .then(res => {
                console.log(res.data);
                const message = res.data;
                if(message.message === "success"){
                    window.open(`/allPlaylist/${email}`);
                }
                else{
                    alert("Please check your email and Password");
                    console.log("Please check your email and Password");
                }
            })
            .catch(error => {
                console.log("some error has occured");
            })
    }

    render(){
        return(
            <section className="login-page" id="login-page">
                <div className="login">
                    <form className="form" action="#">

                        <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary text-center">
                                Please Login to Proceed
                            </h2>
                        </div>

                        <div className="form_group">
                            <input type="email" id="email" className="form_input" placeholder="Email" name="email"></input>
                            <label htmlFor="email" className="form_label">Email</label>
                        </div>
                        
                        <div className="form_group">
                            <input type="password" id="password" className="form_input" placeholder="Password" name="password"></input>
                            <label htmlFor="password" className="form_label">Password</label>
                        </div>

                        <div className="form_group">
                            {/* <NavLink to={`/allPlaylist/${this.state.email}`} exact={true}> */}
                                <a href="#" className="btn btn-green" onClick={this.checkForLogin}>Login &rarr;</a>
                            {/* </NavLink> */}
                        </div>

                        <div className="text">
                            <p>Create a new Account? <a href="#" className="text-link" onClick={this.props.changeLoginState}>Register</a></p>
                        </div>

                    </form>

                </div>
            </section>
        )
    }
}

export default Login;