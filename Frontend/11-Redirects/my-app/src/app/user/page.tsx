import { redirect } from "next/navigation"


const User = () => {
    redirect("/about")
  return (
    <div>User</div>
  )
}
export default User