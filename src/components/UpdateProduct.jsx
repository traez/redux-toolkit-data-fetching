import { useState } from "react";
import { useUpdateProductMutation } from "../reduxtk/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("");

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title,
        price: parseFloat(price),
        stock: parseInt(stock),
        rating: parseFloat(rating),
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="updiv">
    {data && (
      <>
        <h1>{data.title}</h1>
        <p>Price: ${data.price}</p>
        <p>Stock: {data.stock}</p>
        <p>Rating: {data.rating}</p>
      </>
    )}
    <div className="upcont">
      <label className="uplab">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="upinp"
        />
      </label>
      <label className="uplab">
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="upinp"
        />
      </label>
      <label className="uplab">
        Stock:
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="upinp"
        />
      </label>
      <label className="uplab">
        Rating:
        <input
          type="number"
          step="0.01"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="upinp"
        />
      </label>
    </div>
    <button onClick={handleUpdateProduct} disabled={isLoading} className="upbtn">
      Update Product
    </button>
  </div>
  );
};

export default UpdateProduct;
