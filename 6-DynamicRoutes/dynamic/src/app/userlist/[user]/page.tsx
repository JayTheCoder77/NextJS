const User = async ({ params }: { params: { user: string } }) => {
  // console.log(props)
  const { user } = await params;
  console.log(user);
  return (
    <div>
      <h1>User Info : {user}</h1>
      <p>Hello i am {user}</p>
    </div>
  );
};
export default User;
