import React, { createContext, useEffect, useState } from "react";
import { ProductsContextType, Data } from "./Products.types";

import { getProducts, getFilteredProduct } from "../api/axios";

type ProductsContextProviderProps = {
  children: React.ReactNode;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

export function ProductsProvider({ children }: ProductsContextProviderProps) {
  const [currentProducts, setCurrentProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProduct, setFilteredProduct] = useState<Data>();
  const [error, setError] = useState("");
  const [totalPage, setTotalPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number | undefined>(0); // Total number of products
  const [filter, setFilter] = useState<number | string>("");

  // Filtering products by id
  useEffect(() => {
    setFilter(searchTerm);
    getFilteredProduct(setLoading, setError, setFilteredProduct, filter);
  }, [searchTerm, filter]);

  useEffect(() => {
    getProducts(
      currentPage,
      setLoading,
      setError,
      setCurrentProducts,
      setTotalPage,
      setTotalProducts
    );
  }, [currentPage]);

  return (
    <ProductsContext.Provider
      value={{
        currentProducts,
        loading,
        currentPage,
        setCurrentPage,
        setSearchTerm,
        searchTerm,
        error,
        totalPage,
        filter,
        filteredProduct,
        totalProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
