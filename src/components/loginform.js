import React from 'react'
// import './App.css';

export default function loginform() {
  return (
    <>
     <h2>LOGIN</h2>
        <div className="wrapper login">
        <div className="container">
            <div className="col-left">
                <div className="login-text">
                    <h2>Welcome!</h2>
                    <p>Create your account.<br/>For Free!</p>
                    <a href="index2.php" className="btn">Sign Up</a>
                </div>
            </div>

            <div className="col-right">
                <div className="login-form">
                    <h2>Login</h2>
                    <form action="">
                        <p>
                            <label>Username/Email address<span>*</span></label>
                            <input type="text" placeholder="Username or Email" name="username" required />
                        </p>
                        <p>
                            <label>Password<span>*</span></label>
                            <input type="password" placeholder="Password" name="password" required />
                        </p>
                        <p>
                           <a href="logoutHome.php" ><input type="submit" name="login_user" value="Sign In"/></a>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    </div>
    </>
      
    
  )
}
