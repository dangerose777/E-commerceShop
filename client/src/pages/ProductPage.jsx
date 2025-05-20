import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <h1>Product id: {id}</h1>;
}

export default ProductPage;