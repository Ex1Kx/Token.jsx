import './App.css';
import { useState } from 'react';
import loginServices from './services/login'

const  App = () => {
  const [username , setUsername] = useState('')
  const [password, setPassword] = useState ('')
  const [name, setName] = useState ('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const handlesubmit = async (event) =>{
    event.preventDefault()

    try{
  const user = await loginServices.login({
      username,
      password,
      name
    })
    console.log(user)
    setUser(user)
    setUsername('')
    setPassword('')
    setName('')
  }catch(e){
    setError('Wrong Token') 
  }
}
  return (
   <form onSubmit={handlesubmit}>
     <input
     type='text'
     value={username}
     name='Username'
     placeholder='Username'
     onChange={(target) => setUsername(target.value)}
     />
    <input
     type='password'
     value={password}
     name='Password'
     placeholder='Password'
     onChange={(target) => setPassword(target.value)}
     />
    <input
     type='text'
     value={name}
     name='Name'
     placeholder='Name'
     onChange={(target) => setName(target.value)}
     />
     <button>
       Login
     </button>
   </form>
  );
}

export default App;
