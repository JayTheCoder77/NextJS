const Project = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;

  return (
    <div>
      <h1>
        {all}
        <h1>
          All routes :{" "}
          {all.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </h1>
      </h1>
    </div>
  );
};
export default Project;
