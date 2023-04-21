const getData = async () => {
  return new Promise<{ name: string; price: number; id: number }[]>(
    (resolve, reject) => {
      setTimeout(() => {
        resolve([{ name: 'Tv smart', price: 45000, id: 1 }]);
      }, 3000);
    }
  );
};

export default async function Products() {
  const products = await getData();
  // console.log(products);

  return (
    <>
      <h1 className="font-bold">Products</h1>
      {products?.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}
