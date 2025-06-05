import { redirect } from "next/navigation"

const oldpage = () => {
    redirect("/new-page")
  return (
    <div>oldpage</div>
  )
}
export default oldpage