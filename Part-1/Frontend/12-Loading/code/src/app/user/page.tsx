const user = async () => {
  await new Promise((resolve) => setTimeout(() => {
    resolve("content loading...")
  } , 4000));
  return <div>user</div>;
};
export default user;
