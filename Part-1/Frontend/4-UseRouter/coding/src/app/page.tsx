"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  console.log(router);

  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  const refresh = () => {
    // router.refresh();
    // router.back();
  };
  return (
    // <main>
    //   <Link href = "/login">Login</Link>
    //   <Link href = "/about">About</Link>
    //   <button onClick={() => router.push("/colors")}>Go To Colors</button>
    // </main>

    <div>
      <button
        onClick={() => {
          navigate("login");
        }}
      >
        Go to the login page
      </button>
      <button
        onClick={() => {
          refresh();
        }}
      >
        refresh
      </button>
      <Link href="/colors">Colors</Link>
    </div>
  );
};
export default Home;
