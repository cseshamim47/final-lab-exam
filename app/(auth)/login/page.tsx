"use client"

import { useState } from "react"
import {useRouter} from 'next/navigation';

const Login = () => {
    const [name,setName] = useState('')
    const router = useRouter()
    const handleInputChange = (e : any) => {
        setName(e.target.value);
      }
    const conditionalRoute = () => {
        if(name === 'sales'){
            router.push('/system/sales')
        }
        else{
            alert('Invalid User')
        }
    }
    return (
      <div>
          <h1>Login</h1>
          <form>
              <input type="text" placeholder="name" value={name} onChange={handleInputChange}/> <br /> <br />
              <input type="password" placeholder="Password" /> <br /> <br />
              <button onClick={conditionalRoute}>Login</button>
          </form>
      </div>
    )
  }
  export default Login