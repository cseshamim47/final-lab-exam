"use client"
import { useRouter } from "next/navigation"

const Registration = () => {
    const router = useRouter()
    return (
      <div>
          <h1>Registration</h1>
          <form>
              <input type="text" placeholder="Full Name" /> <br />
              <input type="text" placeholder="User Name" /> <br />
              <input type="text" placeholder="Email" /> <br />
              <input type="password" placeholder="Password" /> <br />
              <input type="password" placeholder="Confirm Password" /> <br />
              <input type="text" placeholder="Address" /> <br />
              <input type="text" placeholder="Company Name" /> <br />
              <input type="text" placeholder="Phone Number" /> <br />
              <input type="text" placeholder="City" /> <br />
              <input type="text" placeholder="Country" /> <br />
              <button onClick={()=>router.push("/login")}>Sign Up</button>
              <button onClick={()=>router.push("/login")}>Login</button>
          </form>
      </div>
    )
  }
  export default Registration