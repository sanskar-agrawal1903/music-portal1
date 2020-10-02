import React , {useState} from 'react'
import axios from "axios";
// import "../sass/main.scss"

class Register extends React.Component{

    state={
        email : "",
        password : ""
    }

    registernewUser = ()=>{
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if(!email || !password){
            alert("Please fill all the details");
            return;
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const res =  re.test(String(email).toLowerCase());

        if(!res){
            alert("Please enter valid email address");
            return;
        }

        axios.post(`/signup/${email}/${password}`, {})
            .then(res => {
                if(res.data.message === "success")
                    alert("Registered successfully , Please login in to continue...")
                else
                    alert("Please check your email or password , user might be already regsiter")
            })
            .catch(error=>{
                alert("Please check your email or password , user might be already regsiter")
                console.log("error is " + error);
            })

    }

    render(){
        return(
            <section className="login-page" id="login-page">
                <div className="login">
                    <form className="form" action="#">

                        <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary text-center">
                                Please Register to Proceed
                            </h2>
                        </div>

                        <div className="form_group">
                            <input type="email" id="email" className="form_input" placeholder="Email"></input>
                            <label htmlFor="email" className="form_label">Email</label>
                        </div>
                        
                        <div className="form_group">
                            <input type="password" id="password" className="form_input" placeholder="Password"></input>
                            <label htmlFor="password" className="form_label">Password</label>
                        </div>

                        <div className="form_group">
                            <a href="#" className="btn btn-green" onClick={this.registernewUser}>Register &rarr;</a>
                        </div>

                        <div className="text">
                            <p>Already have an Account? <a href="#" className="text-link" onClick={this.props.changeLoginState}>Login</a></p>
                            {/*  */}
                        </div>

                    </form>

                </div>
            </section>
        )
    }
}

export default Register;