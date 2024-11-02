import { useState } from "react";



const LoginForm = ({ setToken }) => {

  const [loginEmail, setLoginEmail] = useState(``);
  const [loginPassword, setPasswordLogin] = useState(``);

  const logInUser = async (event) => {
    event.preventDefault();
    console.log(`Login Email:`, loginEmail);
    console.log(`Login Password:`, loginPassword);

    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
        method: 'POST', 
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      });

      const responseJSON = await response.json();
      const accessToken = responseJSON.access_token;
      setToken(accessToken);
    } catch(err) {
      console.log(err);
    }
  }



  return ( 

    <>
      <h2>Login</h2>

      <form onSubmit={logInUser}>
        <input 
          placeholder="email"
          onChange={(event) =>  setLoginEmail(event.target.value) }
        />

        <input 
          placeholder="password"
          onChange={ (event) => setPasswordLogin(event.target.value) }
        />

        <button>Login</button>
      </form>
    </>
  )
}

export default LoginForm