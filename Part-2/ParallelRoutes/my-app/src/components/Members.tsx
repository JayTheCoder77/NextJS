const Members = async () => {
  await new Promise(resolve => setTimeout(() => {
      resolve("content loading...")
  } , 4000))
  return <div className="border p-[10rem] w-[30rem]">Members</div>;
};
export default Members;
