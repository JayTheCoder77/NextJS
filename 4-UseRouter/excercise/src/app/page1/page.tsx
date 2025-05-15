"use client";
import { useRouter } from "next/navigation";
const Page1 = () => {
  const router = useRouter();
  const navigate = (page2: string) => {
    router.push(`${page2}`);
  };
  return (
    <div>
      <p>This is a message from page1</p>
      <button
        onClick={() => {
          navigate("/page2");
        }}
      >
        Go to page2
      </button>
    </div>
  );
};
export default Page1;
