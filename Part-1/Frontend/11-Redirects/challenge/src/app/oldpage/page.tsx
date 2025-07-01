import { redirect } from "next/navigation"

const oldpage = () => {
    redirect("/newpage")
  return (
    <div>oldpage</div>
  )
}
export default oldpage