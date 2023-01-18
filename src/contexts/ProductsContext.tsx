import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
type ProductsContextProviderProps = {
  children: React.ReactNode;
};

export type Data = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

export type ProductsContextType = {
  loading: boolean;
  currentProducts: Data[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setSearchTerm: (id: string) => void;
  searchTerm: string;
  error: string;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

export function ProductsProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 5;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtetrProduct, setFilteredProduct] = useState<Data[]>([]);
  const [error, setError] = useState<string>("");

  // Filtering products by id
  useEffect(() => {
    setFilteredProduct(products);
    const filteredData = products.filter((product) =>
      product.id.toString().includes(searchTerm)
    );
    setFilteredProduct(filteredData);
  }, [searchTerm]);

  useEffect(() => {
    let newArray: Data[] = [];
    async function getProducts() {
      try {
        setLoading(true);
        // Getting info about number of pages
        const response = await axios.get(`https://reqres.in/api/products`);
        const pages: number = response.data.total_pages;

        // Joining all pages into one array to make it easier to display 5 items per page
        for (let i = 1; i <= pages; i++) {
          const response = await axios.get(
            `https://reqres.in/api/products?page=${i}`
          );
          newArray = [...newArray, ...response.data.data];
        }
        setProducts(newArray);
        setFilteredProduct(newArray);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(`${error.message}`);
          console.log("error message: ", error.message);
          return error.message;
        } else {
          setError("An unexpected error occurred");
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      }
    }

    getProducts();
  }, []);

  // Get 5  products per page

  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: Data[] = filtetrProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <ProductsContext.Provider
      value={{
        currentProducts,
        loading,
        currentPage,
        setCurrentPage,
        setSearchTerm,
        searchTerm,
        error
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
