import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers]= useState([]);
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(null);
  const url="https://jsonplaceholder.typicode.com/users";
  useEffect(()=>{
    const fetchData= async () =>{
      try{
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok){
          throw new Error("k the lay du lieu");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err){
        setError(err.message);
      } finally{
        setLoading (false);
      }
    };
    fetchData();
  },[])

  if (loading) return <h2 style={{color:'blue'}}>Please Wait..</h2>
  if (error) return <h2 style={{color:'red'}}>Error: {error}</h2>
  return (
    <>
    <h1>Danh sach User</h1>
    <ul>
      {users.map((user)=> (
        <li key={user.id}>
          <strong>{user.name}</strong>- {user.email}         
        </li>
      )
      )}
    </ul>
    </>
  )
}

export default App
