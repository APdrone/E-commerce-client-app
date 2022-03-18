import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // const response = await axios.get(
        //   cat
        //     ? `http://localhost:5000/api/v1/products?category=${cat}`
        //     : `http://localhost:5000/api/v1/products`
        // );
        const response = await axios.get(
          cat
            ? ` https://ecommerce-sizzle-backend-app.herokuapp.com/api/v1/products?category=${cat}`
            : ` https://ecommerce-sizzle-backend-app.herokuapp.com/api/v1/products`
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          })
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(2, 9)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
