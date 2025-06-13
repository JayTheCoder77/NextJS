import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Hello = () => {
  return <div>
    <p>Hey</p>
    <h1 className={`${bebas.className}`}>Hey buddy how u doin</h1>
  </div>;
};
export default Hello;
