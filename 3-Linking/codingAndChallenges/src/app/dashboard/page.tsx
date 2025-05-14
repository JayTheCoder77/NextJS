import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-black">
      <div className="text-center p-4 text-xl shadow-md ">
        <Link href="/portfolio">Portfolio</Link>
      </div>
      <nav className="m-4 p-4">
        <ul className="flex flex-row gap-2">
          <li className="text-white">
            <Link
              className="cursor-pointer hover:bg-amber-200 px-6 bg-amber-400 p-3 rounded-lg"
              href="/home"
            >
              Home
            </Link>
          </li>
          <li className="text-white">
            <Link
              className="cursor-pointer hover:bg-amber-200 px-6 bg-amber-400 p-3 rounded-lg"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Dashboard;
