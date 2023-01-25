import { useContext, useState } from "react";
import { ProductsContextType } from "../../contexts/Products.types";
import { ProductsContext } from "../../contexts/ProductsContext";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import {
  ContainerStyled,
  PaperStyled,
  TableRowStyled,
  CircularProgressStyled
} from "./styles";
import InputSearch from "./InputSearch";
import PaginationComponent from "./Pagination";
import ModalComponent from "./ModalComponent";
const Main = () => {
  const { currentProducts, loading, error, filter, filteredProduct } =
    useContext(ProductsContext) as ProductsContextType;
  const [open, setOpen] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number>(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ContainerStyled>
        <InputSearch />
        <PaperStyled elevation={5}>
          {error === "" ? (
            !loading ? (
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filter
                    ? filteredProduct && (
                        <>
                          <TableRowStyled
                            key={filteredProduct.id}
                            color={filteredProduct.color}
                            onClick={() => {
                              setModalIndex(filteredProduct.id);
                              handleOpen();
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {filteredProduct.id}
                            </TableCell>
                            <TableCell align="center">
                              {filteredProduct.name}
                            </TableCell>
                            <TableCell align="center">
                              {filteredProduct.year}
                            </TableCell>
                          </TableRowStyled>

                          <ModalComponent
                            open={filteredProduct.id === modalIndex && open}
                            handleClose={handleClose}
                            product={filteredProduct}
                          />
                        </>
                      )
                    : currentProducts?.map((product, index) => (
                        <>
                          <TableRowStyled
                            key={product.id}
                            color={product.color}
                            onClick={() => {
                              setModalIndex(index);
                              handleOpen();
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {product.id}
                            </TableCell>
                            <TableCell align="center">{product.name}</TableCell>
                            <TableCell align="center">{product.year}</TableCell>
                          </TableRowStyled>

                          <ModalComponent
                            open={index === modalIndex && open}
                            handleClose={handleClose}
                            product={product}
                          />
                        </>
                      ))}
                </TableBody>
              </Table>
            ) : (
              <CircularProgressStyled color="secondary" size={60} />
            )
          ) : (
            error
          )}
        </PaperStyled>
        <PaginationComponent />
      </ContainerStyled>
    </>
  );
};

export default Main;
