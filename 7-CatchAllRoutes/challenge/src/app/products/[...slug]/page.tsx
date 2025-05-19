const Product = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>Product Id : {slug.join(" ")}</h1>
      <ul>
        <h2>Url segments : </h2>
        {slug.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
};
export default Product;
