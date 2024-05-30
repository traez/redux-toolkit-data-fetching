import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import AllProducts from "./components/AllProducts";
import SpecificProduct from "./components/SpecificProduct";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
     <nav className="navbar">
  <Link className="navlink" to="/">Home</Link> |
  <Link className="navlink" to="/specific-product">Specific Product</Link> |
  <Link className="navlink" to="/add-new-product">Add New Product</Link> |
  <Link className="navlink" to="/update-product">Update Product</Link> |
  <Link className="navlink" to="/delete-product">Delete Product</Link>
</nav>
      <Counter />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AllProducts />
            </>
          }
        />
        <Route path="/specific-product" element={<SpecificProduct />} />
        <Route path="/add-new-product" element={<AddNewProduct />} />
        <Route
          path="/update-product"
          element={<UpdateProduct productId={4} />}
        />
        <Route
          path="/delete-product"
          element={<DeleteProduct productId={2} />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
