import { Suspense } from "react"

const Dashboard = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
        <div>
            <h1>dashboard</h1>
            
        </div>
  )
}
export default Dashboard