"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={()=>router.push('login')}>Login</button>
      <button onClick={()=>router.push('registration')}>Register</button>
    </main>
  )
}
