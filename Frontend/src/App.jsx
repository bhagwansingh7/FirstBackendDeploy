import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setusers] = useState([])

  const getusers = async () => {
    try {
      const response = await axios.get(
        'https://firstbackenddeploy.onrender.com/api/user/getusers'
      )

      console.log(response.data)
      setusers(response.data.response)
    } catch (error) {
      console.log('error in getusers', error)
    }
  }

  return (
    <>
      <div>
        <h1>Hello this is my frontend</h1>

        <button onClick={getusers}>Get Users</button>

        {users.length > 0 && (
          <>
            <h1>User id is: {users[0].id}</h1>
            <h1>Username is: {users[0].name}</h1>
          </>
        )}
      </div>
    </>
  )
}

export default App