import { useContext } from "react";
import { Pagination } from "@mui/material";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductsContextType } from "../../contexts/Products.types";
const PaginationComponent = () => {
  const { setCurrentPage, searchTerm, totalPage } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const handleChange = (event?: any, value?: number) => {
    if (value) setCurrentPage(value);
  };
  return (
    <Pagination
      count={totalPage}
      onChange={handleChange}
      disabled={searchTerm.length > 0 && true}
    />
  );
};

export default PaginationComponent;
