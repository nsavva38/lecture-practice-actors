import { useState, useEffect } from "react"
import LoginForm from "./LoginForm.jsx";

const App = () => {
  
  const [users, setUsers] = useState([]);

  const [nameInput, setNameInput] = useState(``);
  const [emailInput, setEmailInput] = useState(``);
  const [passwordInput, setPasswordInput] = useState(``);
  const [roleInput, setRoleInput] = useState(``);
  const [avatarInput, setAvatarInput] = useState(``);

  const [token, setToken] = useState(``);


  useEffect(() => {

    const getUsers = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/users`);
        const retrievedUsers = await response.json();
        setUsers(retrievedUsers);
      } catch(err) {
        console.log(err);
      }
    }

    getUsers();

  }, [])


  const createUser = async (event) => {
    event.preventDefault();
    console.log(`EmailInput:`, emailInput);
    console.log(`NameInput:`, nameInput);
    console.log(`PasswordInput:`, passwordInput);
    console.log(`RoleInput:`, roleInput);
    console.log(`AvatarInput:`, avatarInput);
    console.log(``);

    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/users`, {
        method: 'POST',
        headers: {
          'Content-Type' : "application/json"
        },
        body: JSON.stringify({
          email: emailInput,
          name: nameInput,
          password: passwordInput,
          role: roleInput,
          avatar: avatarInput
        })
      });

      const newUser = await response.json();
      console.log(newUser);

      // the brackets signify we are making a new array with contents of 'users' and 'newUser'
        // const newUsersArray = []
      // ... ( spread ) takes the contents from the 'users' array, and puts it in the new array
        // const newUsersArray = [...users]
      // adds the newUser to the new array
        // const newUsersArray = [...users, newUser]
      // setUsers sets the newUsersArray as the new 'users' value, which is the new array
      const newUsersArray = [...users, newUser];
      setUsers(newUsersArray);

      setEmailInput(``);
      setNameInput(``);
      setPasswordInput(``);
      setRoleInput(``);
      setAvatarInput(``);

    } catch(err) {
      console.log(err);
    }

  }





  const getProfile = async () => {
    try {

      const response = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
        method: 'GET', // by default, fetch is a GET resquest, so the method here isn't needed
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`
        }
      });
      const profile = await response.json();
      console.log(`profile:`, profile);

    } catch(err) {
      console.log(err);
    }
  }





  return (
    <>
     <h1>Actors</h1>

      <LoginForm setToken={setToken}/>


    <button onClick={getProfile}>Find Me</button>



     <h2>Create a New User</h2>

     <form onSubmit={createUser}>

      <input 
        type="email"
        placeholder="email"
        value={emailInput}
        onChange={ (event) => setEmailInput(event.target.value) }
      />

      <input 
        placeholder="name"
        value={nameInput}
        onChange={ (event) => setNameInput(event.target.value)}
      />

      <input 
        placeholder="password"
        value={passwordInput}
        onChange={ (event) => setPasswordInput(event.target.value) }
      />

      <input 
        placeholder="role"
        value={roleInput}
        onChange={ (event) => setRoleInput(event.target.value) }
      />

      <input 
        placeholder="avatar"
        value={avatarInput}
        onChange={ (event) => setAvatarInput(event.target.value) }
      />

      <button>Create User</button>
     </form>


     <ul>
      {
        users.map((singleUser) => {
          return <li key={singleUser.id}>{singleUser.name}</li>
        })
      }
     </ul>
    </>
  )
}

export default App
