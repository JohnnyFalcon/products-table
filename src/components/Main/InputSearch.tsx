import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment } from "@mui/material";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductsContextType } from "../../contexts/Products.types";
import { TextFieldStyled } from "./styles";

const InputSearch = () => {
  const {
    setCurrentPage,
    setSearchTerm,
    searchTerm,
    totalProducts,
    filteredProduct
  } = useContext(ProductsContext) as ProductsContextType;

  return (
    <Box>
      <TextFieldStyled
        colorField={filteredProduct && filteredProduct.color}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        label="Search product"
        variant="standard"
        value={searchTerm}
        onClick={() => setCurrentPage(1)}
        onChange={(e) => {
          // Using regex to allow only numebers to be typed
          const re = /^[0-9\b]+$/;
          if (totalProducts)
            if (
              (e.target.value === "" || re.test(e.target.value)) &&
              e.target.value.length <= totalProducts.toString().length &&
              Number(e.target.value) <= totalProducts &&
              e.target.value !== "0" // Using total number of product to unable users to tape ID number out of range
            ) {
              setSearchTerm(e.target.value);
            }
        }}
      />
    </Box>
  );
};

export default InputSearch;
