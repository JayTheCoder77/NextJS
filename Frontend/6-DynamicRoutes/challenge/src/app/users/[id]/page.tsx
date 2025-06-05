const Users = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1>User Profile</h1>
      <p>User : {id}</p>
    </div>
  );
};
export default Users;
